import React from 'react'

const Seasons = ({seasons}) => {
  return (
    <div>
        <p>Seasons in Total:{seasons.length} </p>
        <p>Episode in Total:{' '}
        {seasons.reduce((sum, season) => {
  return sum + season.episodeOrder;
}, 0)}
        </p>
        <div>
            {seasons.map(season=><div key={season.id}>
                <p>Seasons {season.number}</p>
                <p>Episode : {season.episodeOrder}</p>
                <div>
                    Aired : {season.premiereDate} - {season.endDate}
                </div>
            </div>)
            
            }
        </div>
    </div>
  )
}

export default Seasons