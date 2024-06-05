import React from 'react'

const Cast = ({cast}) => {
  return (
    <div>
       {
        cast.map((person ,character)=>(<div key={person.id}>\
        <div>
            <img src={person.image ? person.image.medium : 'NotFound.png'}  />
        </div>
        <div>
            {person.name} | {character.name} {character.voice && '| Voiceover'}
        </div>
        </div>))
       
       }
    </div>
  )
}

export default Cast