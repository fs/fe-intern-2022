import React, { useState, useEffect } from 'react'
import Spinner from '../components/spinner/spinner'
import styles from '../components/SearchBar/search.module.css'

export function SearchingPoke() {
  const [value, setValue] = useState('')
  const [pokemonName, setPokemonName] = useState('')
  const [isError, setError] = useState(false)
  const [pokeInfo, setPokeInfo] = useState({})
  const [isLoaded, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        setPokeInfo({
          id: data.id,
          name: data.name,
          pic: data.sprites?.other.dream_world.front_default,
          type: data.type,
        })
        setError(false)
      })
      .catch(e => {
        setLoading(true)
        setError(true)
        console.log('error', e)
      })
  }, [pokemonName])

  return (
    <>
      <div className={`${styles.searchBox}`}>
        <input
          className={`${styles.searchInput} `}
          placeholder="search pokemon"
          onChange={e => setValue(e.target.value)}
        ></input>
        <input
          className={`${styles.searchButton}`}
          type="submit"
          value="🔎"
          onClick={() => setPokemonName(value.toLowerCase())}
        />
      </div>
      {!isLoaded && <Spinner />}
      <div>
        {isError && <div>Oops, thats an error</div>}
        <ul>
          <h2>{pokeInfo.name}</h2>
          <h2>{pokeInfo.pic}</h2>
          <h2>{pokeInfo.type}</h2>
          <h2>{pokeInfo.id}</h2>
        </ul>
      </div>
    </>
  )
}

export default SearchingPoke
