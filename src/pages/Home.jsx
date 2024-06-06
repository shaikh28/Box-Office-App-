import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState, useReducer } from "react";
import { searchForPeoples, searchForShows } from "../api/TvMaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
const reducerFn = (currentCounter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return currentCounter + 1;
    case "DECREMENT":
      return currentCounter - 1;
    case "RESET":
      return 0;
    case "setValue":
      return action.newCounterValue;
  }
  return 0;
};
const Home = () => {
  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const onReset = () => {
    dispatch({ type: "RESET" });
  };
  const onsetValue = () => {
    dispatch({ type: "setValue",newCounterValue:500 });
  };

  const [filter, setFilter] = useState("");
  const [counter, dispatch] = useReducer(reducerFn, 0);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForPeoples(filter.q),

    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Something Went Wrong{apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Results Found</div>;
    }

    if (apiData) {
      if (apiData && apiData.length > 0) {
        return apiData[0].show ? (
          <ShowsGrid shows={apiData} />
        ) : (
          <ActorsGrid actors={apiData} />
        );
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
      <div>Counter : {counter}</div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
      <button type="button" onClick={onsetValue}>
        Set The Value
      </button>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
