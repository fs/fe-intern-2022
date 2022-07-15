export const getServerSideProps = async () => {
  const collectingPokemons = num => {
    return fetch(`${process.env.API_URL}/${num}`)
      .then(res => res.json())
      .then(data => data)
  }
  const arrayPokemons = []
  for (let i = 1; i <= 10; i++) {
    const randomNum = Math.floor(Math.random() * 900) + 1
    const data = await collectingPokemons(randomNum)
    arrayPokemons.push(data)
  }
  const arrayPokemonsMinimized = arrayPokemons.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    }
  })
  return {
    props: {
      arrayPokemons,
      arrayPokemonsMinimized,
    },
  }
}

export function Poke({ arrayPokemonsMinimized, arrayPokemons }) {
  console.log('Array down below', arrayPokemons)
  console.log('Minimized array down below', arrayPokemonsMinimized)
  return (
    <>
      <h1>Pokemons</h1>
    </>
  )
}

export default Poke
