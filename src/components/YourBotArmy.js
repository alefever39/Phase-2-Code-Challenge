import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourBotArmy, onClick, onDelete }) {
  const captainCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Captain")
  );
  const assaultCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Assault")
  );
  const medicCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Medic")
  );
  const defenderCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Defender")
  );
  const witchCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Witch")
  );
  const supportCard = createCard(
    yourBotArmy.find((bot) => bot["bot_class"] === "Support")
  );

  function createCard(bot) {
    if (bot) {
      return (
        <section>
          <BotCard
            key={bot.id + "army"}
            bot={bot}
            onClick={onClick}
            onDelete={onDelete}
          />
        </section>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <div className="oneCard">
            <h3>Captain</h3>
            {captainCard}
          </div>
          <div className="oneCard">
            <h3>Assault</h3>
            {assaultCard}
          </div>
          <div className="oneCard">
            <h3>Medic</h3>
            {medicCard}
          </div>
          <div className="oneCard">
            <h3>Defender</h3>
            {defenderCard}
          </div>
          <div className="oneCard">
            <h3>Witch</h3>
            {witchCard}
          </div>
          <div className="oneCard">
            <h3>Support</h3>
            {supportCard}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
