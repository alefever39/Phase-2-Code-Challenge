import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [specView, setSpecView] = useState(false);
  const [botSelection, setBotSelection] = useState({});

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => window.alert(error));
  }, []);

  function botSelected(e, newBot) {
    if (e.target.textContent !== "x") {
      setSpecView(true);
      setBotSelection(newBot);
    }
  }

  function onAddBot(newBot) {
    const botPresent = yourBotArmy.find((bot) => bot.id === newBot.id);
    if (!botPresent) {
      setYourBotArmy((yourBotArmy) => {
        return [...yourBotArmy, newBot];
      });
      setBots((bots) => bots.filter((bot) => bot.id !== newBot.id));
    }
  }

  function onGoBack() {
    setSpecView(false);
  }

  function onRemoveBot(e, removeBot) {
    setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== removeBot.id));
    setBots((bots) => {
      return [...bots, removeBot];
    });
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
      <SortBar />
      {specView ? (
        <BotSpecs bot={botSelection} onAddBot={onAddBot} onGoBack={onGoBack} />
      ) : (
        <BotCollection
          bots={bots}
          onClick={botSelected}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default BotsPage;
