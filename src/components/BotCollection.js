import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onClick, onDelete }) {
  const botsList = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id + "collection"}
        bot={bot}
        onClick={onClick}
        onDelete={onDelete}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">{botsList}</div>
    </div>
  );
}

export default BotCollection;
