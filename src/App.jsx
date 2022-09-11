import { useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const addToMessageList = (newMessage) => {
    setMessageList((prevMessage) => [...prevMessage, newMessage]);};

  const botGreeting = (authorName) => {
    return {
      title: 'Bot answer',
      text: `Hello ${authorName}`,
      author: 'chatBot',
    };
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== 'chatBot'
    ) {
      const timeoutBot = setTimeout(() => {
        addToMessageList(
          botGreeting(messageList[messageList.length - 1].author)
        );
      }, 1500);
      return () => {
        clearTimeout(timeoutBot);
      };
    }
  }, [messageList]);

  return (
    <>
      <MessageList messageList={messageList} />
      <Form addNewMessage={addToMessageList} />
    </>
  );
};
