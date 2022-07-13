const getRandomNum = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset=${getRandomNum(
    0,
    1154
  )}}`
  const res = await fetch(url)
  const pokes = await res.json()

  const { results } = pokes

  const randomNum = Math.floor(Math.random() * (results.length - 1))
  const randomPokemon = results[randomNum]
  const resPoke = await fetch(randomPokemon.url)
  const randomPokeObj = await resPoke.json()

  return {
    props: {
      randomPokeObj,
      pokes,
    },
  }
}

function Poke({ randomPokeObj, pokes }) {
  // console.log(randomPokeObj)
  // const stars = ({ url }) => {
  //   const row = []

  //   for (let i = 0; i < 20; i++) {
  //     row.push(<img>{url}</img>)
  //   }

  //   return row
  // }

  console.log(pokes)

  const { sprites } = randomPokeObj
  const { other } = sprites
  const { dream_world } = other
  const { front_default: pokePicture } = dream_world
  const { name: pokeName } = randomPokeObj

  //console.log(pokePicture)

  // <button onClick={() => setRandomPoke(pokeNames[randomNum])}>
  //   generate pokemon
  // </button>
  // <ul>
  //   {pokeNames.map(pokeName => (
  //     <li key={pokeName.id}>{pokeName}</li>
  //   ))}
  // </ul>
  return (
    <>
      <h1>Pokemons</h1>

      <img src={pokePicture}></img>
      <p>{pokeName}</p>
    </>
  )
}

export default Poke
