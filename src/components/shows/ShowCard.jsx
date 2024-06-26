import React from "react";


const ShowCard = ({ name, image, id, summary,onStarMeClick,isStarred }) => {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No Description Available";
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read More</a>
        <button type="button" onClick={()=>onStarMeClick(id)}>
        {isStarred ? 'Unstar me' : 'Star me'}
        </button>
       </div>
    </div>
  );
};

export default ShowCard;
