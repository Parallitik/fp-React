import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHOR, Message } from 'src/types';
import style from './Form.module.scss';

interface FormProps {
  addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [addMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      addMessage(chatId, {
        author: AUTHOR.USER,
        value,
      });
    }
    setValue('');
  };

  return (
    <>
      <form name="form" className={style.form} onSubmit={handleSubmit}>
        <TextField
          inputRef={inputRef} 
          value={value}
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          id="outlined-basic"
          placeholder="Ivan"
          name="author"
          type="text"
          label="Author"
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          value={value}
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          id="outlined-basic"
          placeholder="Hello"
          name="text"
          type="text"
          label="Message"
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />
        <MUIButton
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          disabled={!value}
          variant="contained"
          type="submit"
        >
          Send message
        </MUIButton>
      </form>
    </>
  );
};
