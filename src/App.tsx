import { FC, useEffect, useState } from 'react';
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { Message, Messages } from './types';
import { Chat } from './components/Chats/Chat';

export const App: FC = () => {
  const [messageList, setMessageList] = useState<Messages>([]);

  const addNewMessage = (newMessage: Message) => {
    setMessageList((prevMessage) => [...prevMessage, newMessage]);
  };

  const botGreeting = (authorName: string) => {
    return {
      title: 'Bot answer',
      author: 'chatBot',
      text: `Hello ${authorName}`,
    };
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== 'chatBot'
    ) {
      const timeoutBot = setTimeout(() => {
        addNewMessage(botGreeting(messageList[messageList.length - 1].author));
      }, 1500);
      return () => {
        clearTimeout(timeoutBot);
      };
    }
  }, [messageList]);

  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Chat />
        <MessageList messageList={messageList} />
      </div>
      <Form addNewMessage={addNewMessage} />
    </div>
  );
};
