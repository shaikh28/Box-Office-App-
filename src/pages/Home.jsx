import React from "react";
import { useState } from "react";
import { searchForPeoples, searchForShows } from "../api/TvMaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      let results;
      if (searchOption === "shows") {
        results = await searchForShows(q);
        setApiData(results);
      } else {
        results = await searchForPeoples(q);
      }
      setApiData(results);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Something Went Wrong{apiDataError.message}</div>;
    }
    if(apiData?.length === 0){
      return <div>No Results Found</div>
    }
  
    if (apiData) {
      if (apiData && apiData.length > 0) {
        return apiData[0].show ? <ShowsGrid shows={apiData} /> : <ActorsGrid actors={apiData}/>;
        // apiData.map((data) => (
        //     <div key={data.show.id}>{data.show.name}</div>
        //   ))
        //apiData.map((data) => (
        //     <div key={data.person.id}>{data.person.name}</div>
        //   ));
      }
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
