import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { searchForPeoples, searchForShows } from "../api/TvMaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
const Home = () => {

  const [filter, setFilter] = useState("");
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForPeoples(filter.q),

    enabled: !!filter,
    refetchOnWindowFocus:false
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
