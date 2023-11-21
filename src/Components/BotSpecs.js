// BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, onGoBack, onEnlist }) => {
  return (
    <div>
      <h2>Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      {/* Add more details about the bot if needed */}
      <button onClick={onGoBack}>Go Back</button>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
