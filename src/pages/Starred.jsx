import React from "react";
import Navs from "../components/Navs";
import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {
  const [starredShows]=useStarredShows()
  return <div>Starred , starred {starredShows.length}</div>;
};

export default Starred;
