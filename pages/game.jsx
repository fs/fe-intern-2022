export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=1000&offset=0`
  const res = await fetch(url)
  const pokes = await res.json()

  const { results: arrOfPokes } = pokes
  const pokeNames = arrOfPokes.map(object => object.name)
  const randomIndex = Math.floor(Math.random() * pokeNames.length)
  const pokeResponse = await fetch(
    `${process.env.API_URL}/${pokeNames[randomIndex]}`
  )
  const randomPokemon = await pokeResponse.json()

  return {
    props: {
      randomPokemon,
    },
  }
}

export default function Game() {
  return (
    <div>
      <h1>Game Page</h1>
      <button>Start</button>
    </div>
  )
}
