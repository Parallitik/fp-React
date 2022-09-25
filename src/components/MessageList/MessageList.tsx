import { FC } from 'react';
import { Message } from 'src/types';
import style from './MessageList.module.scss';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, idx) => (
        <li key={idx} data-testid="li">
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};