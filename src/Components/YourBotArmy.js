// YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, onRelease, onDelete }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onRelease={() => onRelease(bot)} onDelete={() => onDelete(bot)} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
