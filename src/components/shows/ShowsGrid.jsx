import React from "react";
import ShowCard from "./ShowCard";

const ShowsGrid = ({ shows }) => {
  return <div>{
    shows.map((data)=><ShowCard key={data.show.id} name={data.show.name} image={data.show.image ? data.show.image.medium : "/NotFound.png"} summary={data.show.summary}/>)
    }</div>;
};

export default ShowsGrid;
