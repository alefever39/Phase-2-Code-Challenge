import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => window.alert(error));
  }, []);

  function onAddBot(e, newBot) {
    if (e.target.textContent !== "x") {
      const botPresent = yourBotArmy.find((bot) => bot.id === newBot.id);
      if (!botPresent) {
        setYourBotArmy((yourBotArmy) => {
          return [...yourBotArmy, newBot];
        });
      }
    }
  }

  function onRemoveBot(e, removeBot) {
    setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== removeBot.id));
  }

  function handleDelete(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => window.alert(error));
    setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== id));
    setBots(bots.filter((bot) => bot.id !== id));
  }

  return (
    <div>
      <YourBotArmy
        yourBotArmy={yourBotArmy}
        onClick={onRemoveBot}
        onDelete={handleDelete}
      />
      <BotCollection bots={bots} onClick={onAddBot} onDelete={handleDelete} />
    </div>
  );
}

export default BotsPage;
