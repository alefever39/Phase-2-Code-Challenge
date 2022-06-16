import React, { useState } from "react";

function SortBar({ onSortChange, onFilterChange }) {
  const initialFilter = [
    {
      class: "Support",
      checked: false,
    },
    {
      class: "Medic",
      checked: false,
    },
    {
      class: "Assault",
      checked: false,
    },
    {
      class: "Defender",
      checked: false,
    },
    {
      class: "Captain",
      checked: false,
    },
    {
      class: "Witch",
      checked: false,
    },
  ];
  const [sort, setSort] = useState("health");
  const [filter, setFilter] = useState(initialFilter);

  function handleSortChange(e) {
    setSort(e.target.value);
    onSortChange(e.target.value);
  }

  function handleFilterChange(e) {
    const changedValue = filter.map((classType) => {
      if (classType.class === e.target.value) {
        return { ...classType, checked: e.target.checked };
      } else {
        return classType;
      }
    });
    setFilter(changedValue);
    console.log("NOT ENOUGH TIME!");
  }

  return (
    <div className="menu">
      <div className="sort-bar">
        <label>Sort bots by: </label>
        <select name="sortType" value={sort} onChange={handleSortChange}>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
      <div className="filter">
        <h3>Filter bots by class:</h3>
        <input
          type="checkbox"
          id="Support"
          name="classType"
          value="Support"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Support"> Support</label>
        <input
          type="checkbox"
          id="Medic"
          name="classType"
          value="Medic"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Medic"> Medic</label>
        <input
          type="checkbox"
          id="Assault"
          name="classType"
          value="Assault"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Assault"> Assault</label>
        <br />
        <input
          type="checkbox"
          id="Defender"
          name="classType"
          value="Defender"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Defender"> Defender</label>
        <input
          type="checkbox"
          id="Captain"
          name="classType"
          value="Captain"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Captain"> Captain</label>
        <input
          type="checkbox"
          id="Witch"
          name="classType"
          value="Witch"
          className="classType"
          onChange={handleFilterChange}
        />
        <label for="Witch"> Witch</label>
      </div>
    </div>
  );
}

export default SortBar;
