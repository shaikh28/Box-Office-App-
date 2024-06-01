import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/TvMaze";
const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>Something went Wrong {showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show Data For {showData.name}</div>;
  }
  return <div>Data is loading</div>;
};

export default Show;
