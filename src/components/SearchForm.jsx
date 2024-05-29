import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            onChange={onRadioChange}
            checked={searchOption === "shows"}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            onChange={onRadioChange}
            checked={searchOption === "actors"}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      
    </div>
  );
};

export default SearchForm;
