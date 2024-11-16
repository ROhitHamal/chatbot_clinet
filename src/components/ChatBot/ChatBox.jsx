import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-12 right-10 w-80 bg-gray-100 rounded-lg shadow-xl">
      <div className="flex justify-between items-center p-4 border-b bg-gray-200 rounded-t-lg">
        <h3 className="text-lg font-semibold">Chat-Bot</h3>
        <button 
          onClick={onClose} 
          className="hover:bg-gray-300 rounded-full p-1"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="h-80 p-4 overflow-y-auto">
        {/* Chat messages would go here */}
      </div>

      <div className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your text"
            className="flex-grow p-2 rounded-full bg-green-500 text-white placeholder-white/90"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="text-green-500">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;