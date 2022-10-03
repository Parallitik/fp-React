import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import style from './Chat.module.scss';

type ChatList = ChatItem[];

interface ChatItem {
  id: number;
  name: string;
}

export const Chat = () => {
  const chats: ChatList = [
    {
      id: 1,
      name: 'chat',
    },
    {
      id: 2,
      name: 'chat',
    },
    {
      id: 3,
      name: 'chat',
    },
  ];

  return (
    <div className={style.chatWrp}>
      <List>
        {chats.map((chatItem) => (
          <ListItemButton key={chatItem.id}>
            {chatItem.id}
            <ListItemText style={{ padding: '5px 10px' }} />
            {chatItem.name}
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};
