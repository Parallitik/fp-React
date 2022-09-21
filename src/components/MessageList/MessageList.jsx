import style from './MessageList.module.scss';


export const MessageList = ({ messageList }) => {
  return (
    <>
      <h1 className={style.chatTitle}>Welcome to our chat!</h1>
      <div className={style.chatWrp}>
        {messageList.map((message, idx) => (
          <div className={style.chatMessage} key={idx}>
            <h5 className={style.chatInfo}>{message.title}</h5>
            <p className={style.chatText}>{message.text}</p>
            <cite>{message.author}</cite>
          </div>
        ))}
      </div>
    </>
  );
};
