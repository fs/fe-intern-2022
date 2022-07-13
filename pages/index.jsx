import Image from 'next/image'

// const getRandomNum = (min, max) => {
//   let rand = min - 0.5 + Math.random() * (max - min + 1)
//   return Math.round(rand)
// }

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=10&offset=0`
  const res = await fetch(url)
  const pokes = await res.json()

  const { results } = pokes

  const randomNum = Math.floor(Math.random() * (results.length - 1))
  const randomPokemon = results[randomNum]
  const resPoke = await fetch(randomPokemon.url)
  const randomPokeObj = await resPoke.json()

  //  const generateRandomPhotos = () => {
  //      const photoUrl =
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`
  //    for
  //
  //  }

  return {
    props: {
      randomPokeObj,
      pokes,
    },
  }
}

function Poke({ pokes }) {
  const { results } = pokes
  // const { sprites } = randomPokeObj
  // const { other } = sprites
  // const { dream_world } = other
  // const { front_default: pokePicture } = dream_world
  //console.log(pokePicture)

  // <button onClick={() => setRandomPoke(pokeNames[randomNum])}>
  //   generate pokemon
  // </button>
  // <ul>
  //   {pokeNames.map(pokeName => (
  //     <li key={pokeName.id}>{pokeName}</li>
  //   ))}
  // </ul>
  // pokeObj.url.slice(-2, -1)
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {results.map(pokeObj => (
          <div key={pokeObj.id}>
            <li>{pokeObj.name}</li>
            <Image
              alt={pokeObj.name}
              width="300px"
              height="300px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeObj.url.slice(
                -2,
                -1
              )}.svg`}
            />
          </div>
        ))}
      </ul>
    </>
  )
}

export default Poke
