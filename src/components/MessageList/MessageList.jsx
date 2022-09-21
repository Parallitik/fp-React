import style from './MessageList.module.scss';

export const MessageList = ({ messageList }) => {
  return (
    <div className={style.chatContainer}>
      <h1 className={style.chatTitle}>Welcome to our chat!</h1>
      <div className={style.chatWrp}>
        {messageList.map((message, idx) => (
          <div className={style.chatMessage} key={idx}>
            <h5 role="messageText" className={style.chatInfo}>
              {message.title}
            </h5>
            <p
              role="messageText"
              data-testid="chat-messageText"
              className={style.chatText}
            >
              {message.text}
            </p>
            <cite role="messageText" data-testid="chat-authorText">
              {message.author}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
};
