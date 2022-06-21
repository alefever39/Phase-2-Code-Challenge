import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [specView, setSpecView] = useState(false);
  const [botSelection, setBotSelection] = useState({});
  const [filteredBots, setFilteredBots] = useState(bots);

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
    const classPresent = yourBotArmy.find(
      (bot) => bot["bot_class"] === newBot["bot_class"]
    );
    if (!botPresent) {
      if (classPresent) {
        alert(`You already have a ${newBot["bot_class"]} bot`);
      } else {
        setYourBotArmy((yourBotArmy) => {
          return [...yourBotArmy, newBot];
        });
        setBots((bots) => bots.filter((bot) => bot.id !== newBot.id));
      }
    }
  }

  function onGoBack() {
    setSpecView(false);
  }

  function onRemoveBot(e, removeBot) {
    if (e.target.textContent !== "x") {
      setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== removeBot.id));
      setBots((bots) => {
        return [...bots, removeBot];
      });
    }
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

  function onSortChange(sortType) {
    const unsorted = [...bots];
    const sorted = unsorted.sort((a, b) => {
      let aSort = a[sortType];
      let bSort = b[sortType];
      return aSort > bSort ? -1 : aSort < bSort ? 1 : 0;
    });
    setBots(sorted);
  }

  // function onFilterChange(filterArray) {
  //   const filterTrue = filterArray.filter((classType) => classType.checked);
  //   setFilteredBots(filteredBots.filter(bot => )
  // }

  return (
    <div>
      <YourBotArmy
        yourBotArmy={yourBotArmy}
        onClick={onRemoveBot}
        onDelete={handleDelete}
      />
      <SortBar onSortChange={onSortChange} />
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
