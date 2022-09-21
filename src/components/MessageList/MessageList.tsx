import { FC } from 'react';
import { Messages } from 'src/types';
import style from './MessageList.module.scss';

interface MessageListProps {
  messageList: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => {
  return (
    <div className={style.chatContainer}>
      <div className={style.chatWrp}>
        {messageList.map((message, idx) => (
          <div className={style.chatMessage} key={idx}>
            <h5 role="messageText" className={style.chatInfo}>
              {message.title}
            </h5>
            <cite role="messageText" data-testid="chat-authorText">
              {message.author}
            </cite>
            <p
              role="messageText"
              data-testid="chat-messageText"
              className={style.chatText}
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
