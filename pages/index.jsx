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

  return {
    props: {
      randomPokeObj,
      pokes,
    },
  }
}

function Poke({ pokes }) {
  const { results } = pokes
  console.log(pokes)
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {results.map(({ name, url }) => (
          <li key={url}>
            <div>{name}</div>
            <Image
              alt={name}
              width="300px"
              height="300px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url.slice(
                -2,
                -1
              )}.svg`}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Poke
