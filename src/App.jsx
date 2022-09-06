import { useState } from 'react';
import { Message } from './components/Message/Message'
import style from './App.module.scss'

export const App = () => {
  const [textMessage, setMessage] = useState('Hello React')

  const handleChangeText = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="App">
      <Message text={textMessage} addExclamationPoint={setMessage}/>
      <input placeholder="Enter text:" className={style.input} onChange={handleChangeText}/>
    </div>
  );
};
