// BotCollection.js
import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onEnlist, onSelect }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={() => onEnlist(bot)} onSelect={() => onSelect(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
