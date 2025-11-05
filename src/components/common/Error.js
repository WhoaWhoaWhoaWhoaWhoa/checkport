import React from 'react';

const Error = ({ message, onRetry }) => (
  <div className="error">
    <div>Ошибка: {message}</div>
    {onRetry && (
      <button onClick={onRetry} className="retry-btn">
        Попробовать снова
      </button>
    )}
  </div>
);

export default Error;