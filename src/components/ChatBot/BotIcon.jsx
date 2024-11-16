import React from 'react';

const BotIcon = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-12 right-10 w-16 h-16 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    </svg>
  </button>
);

export default BotIcon;