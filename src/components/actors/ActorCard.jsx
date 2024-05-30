import React from "react";

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : `Country Unknown`}</p>
      {!!birthday && <p>Born On {birthday}</p>}
      <p>{deathday ? `Died on ${deathday}` : "Till Today"}</p>
    </div>
  );
};

export default ActorCard;
