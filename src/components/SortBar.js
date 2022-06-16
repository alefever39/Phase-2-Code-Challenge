import React from "react";

function SortBar() {
  return (
    <div className="menu">
      <div className="sort-bar">
        <label>Sort bots by: </label>
        <select name="sortType">
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
      <div className="filter">
        <h3>Filter bots by class:</h3>
        <input type="checkbox" id="Support" name="classType" value="Support" />
        <label for="Support"> Support</label>
        <input type="checkbox" id="Medic" name="classType" value="Medic" />
        <label for="Medic"> Medic</label>
        <input type="checkbox" id="Assault" name="classType" value="Assault" />
        <label for="Assault"> Assault</label>
        <br />
        <input
          type="checkbox"
          id="Defender"
          name="classType"
          value="Defender"
        />
        <label for="Defender"> Defender</label>
        <input type="checkbox" id="Captain" name="classType" value="Captain" />
        <label for="Captain"> Captain</label>
        <input type="checkbox" id="Witch" name="classType" value="Witch" />
        <label for="Witch"> Witch</label>
      </div>
    </div>
  );
}

export default SortBar;
