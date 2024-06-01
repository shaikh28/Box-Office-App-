import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/TvMaze";

const useShowbyId = (showId) => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    async function fecthData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
        console.log(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fecthData();
  }, [showId]);
  return { showData, showError };
};
const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowbyId(showId);
  if (showError) {
    return <div>Something went Wrong {showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show Data For {showData.name}</div>;
  }
  return <div>Data is loading</div>;
};

export default Show;
