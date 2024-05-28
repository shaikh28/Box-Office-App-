import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [searchStr, setSearchStr] = useState("");

  console.log(setSearchStr);
  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault()
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    const body = await response.json()
      console.log(body);

    // https://api.tvmaze.com/search/shows?q=boys
  }
  return (
    <div>
      <form onSubmit={onSearch}>
        <input name='Search'type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
