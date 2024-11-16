import React, { useState } from 'react';
import BotIcon from './BotIcon';
import ChatBox from './ChatBox';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <ChatBox onClose={() => setIsOpen(false)} />
      ) : (
        <BotIcon onClick={() => setIsOpen(true)} />
      )}
    </>
  );
};

export default ChatBot;