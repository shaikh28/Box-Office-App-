import { useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";



const ShowsGrid = ({ shows }) => {
  const [starredShows,dispatchStarred]=useStarredShows()
  const onStarMeClick = showId =>{
  const isStarred =  starredShows.includes(showId)
  if (isStarred) {
    dispatchStarred({type:"UNSTAR",showId})
  }
  else{
    dispatchStarred({type:"STAR",showId})
  }
  }
  return <div>{ 
    shows.map((data)=>(<ShowCard key={data.show.id} id={data.show.id} name={data.show.name} image={data.show.image ? data.show.image.medium : "/NotFound.png"} summary={data.show.summary} onStarMeClick={onStarMeClick} isStarred={starredShows.includes(data.show.id)} />))
    }</div>;
};

export default ShowsGrid;
