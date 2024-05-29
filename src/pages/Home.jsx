import React from "react";
import { useState } from "react";
import { searchForPeoples, searchForShows } from "../api/TvMaze";
const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  console.log(setSearchStr);
  console.log(searchOption);
  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption === "shows") {
        const results = await searchForShows(searchStr);
        setApiData(results);
      } else {
        const results = await searchForPeoples(searchStr);
        setApiData(results);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Something Went Wrong{apiDataError.message}</div>;
    }
    if (apiData) {
      if (apiData && apiData.length > 0) {
        return apiData[0].show
          ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
          : apiData.map(data => (
              <div key={data.person.id}>{data.person.name}</div>
            ));
      }
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
