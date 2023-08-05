import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const Chat = ({ artWorkId }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3001', {
      cors: {
        origin: 'http://localhost:3000',
      },
    });

    socket.emit('joinRoom', artWorkId);

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [artWorkId]);

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    const socket = io('http://localhost:3001');
    socket.emit('chatMessage', artWorkId, messageInput);
    setMessageInput('');
  };

  return (
    <section className='chat__section'>
      <h2 className='chat__title'>chat</h2>
      <div className='chat__wrapper'>
        <div className='messages__wrapper'>
          {messages.map((message, index) => (
            <div className='message__wrapper' key={index}>
              <p className='username'>Me:</p>
              <p>{message}</p>
            </div>
          ))}
        </div>
        <div className='button__wrapper'>
          <input
            placeholder='Type your message here'
            className='chat__input'
            type='text'
            value={messageInput}
            onChange={handleInputChange}
          />
          <button className='chat__button' onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
