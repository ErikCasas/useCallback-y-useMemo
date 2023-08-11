import React from 'react'
import'../styles/pokestyles.css'
const PokeName = ({children}) => {
  return (
    <div className='pokemon'>
        <img className='pokemonImg' src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png" alt="pokeball" />
        <li>{children}</li>
    </div>
  )
}

export default PokeName