import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourBotArmy, onClick, onDelete }) {
  const botList = yourBotArmy.map((bot) => {
    return (
      <BotCard
        key={bot.id + "army"}
        bot={bot}
        onClick={onClick}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{botList}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
