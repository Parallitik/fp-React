import { ListItem } from '@mui/material';
import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Chat } from 'src/types';
import { NavLink } from 'react-router-dom';
import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onRemoveChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat, onRemoveChat }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              to={`/chats/${chat.id}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {chat.name}
            </NavLink>
            <MUIButton
              style={{ margin: '5px 5px', padding: '5px 5px' }}
              variant="contained"
              type="submit"
              onClick={() => onRemoveChat(chat.id)}
            >
              Del
            </MUIButton>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <TextField
          value={value}
          style={{ margin: '5px 5px', padding: '5px 5px' }}
          id="outlined-basic"
          placeholder="chat name"
          name="text"
          type="text"
          label="Enter name"
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />
        <MUIButton
        type="submit"
        variant="contained">
              Create chat
        </MUIButton>
      </form>
    </>
  );
};
