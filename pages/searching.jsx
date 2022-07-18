import React, { useState, useEffect } from 'react'

export function Poke() {
  const [value, setValue] = useState('')
  const [pokemonName, setPokemonName] = useState('')
  const [isError, setError] = useState(false)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setError(false)
      })
      .catch(e => {
        setError(true)
        console.log('error', e)
      })
  }, [pokemonName])

  return (
    <>
      <h1>Pokemons</h1>
      <div>
        <input
          placeholder="search pokemon"
          onChange={e => setValue(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={() => setPokemonName(value)}
        />
        {isError && <div>Oops, thats an error</div>}
        <ul>
          <h1>{value}</h1>
        </ul>
      </div>
    </>
  )
}

export default Poke
