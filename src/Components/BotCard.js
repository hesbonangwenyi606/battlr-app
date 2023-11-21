// BotCard.js
import React from 'react';

const BotCard = ({ bot, onEnlist, onSelect, onRelease, onDelete }) => {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <button onClick={onEnlist}>Enlist</button>
      <button onClick={onSelect}>View Details</button>
      <button onClick={onRelease}>Release</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default BotCard;
