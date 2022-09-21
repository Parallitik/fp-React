import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FC, useEffect, useRef, useState } from 'react';
import { Message } from 'src/types';
import style from './Form.module.scss';

interface FormProps {
  addNewMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addNewMessage }) => {
  const [textValue, setTextValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewMessage({
      title: 'Your message',
      author: authorValue,
      text: textValue,
    });
    setTextValue('');
    setAuthorValue('');
  };

  return (
    <>
      <form name="form" className={style.form} onSubmit={handleSubmit}>
        {/* Без атрибута autoFocus автофокус инпута почему-то не работает */}
        <TextField
          ref={inputRef}
          value={authorValue}
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          id="outlined-basic"
          placeholder="Ivan"
          name="author"
          type="text"
          label="Author"
          variant="outlined"
          onChange={(e) => setAuthorValue(e.target.value)}
        />
        <TextField
          value={textValue}
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          id="outlined-basic"
          placeholder="Hello"
          name="text"
          type="text"
          label="Message"
          variant="outlined"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <MUIButton
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          variant="contained"
          type="submit"
        >
          Send message
        </MUIButton>
      </form>
    </>
  );
};
