export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset=0`
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

export default function Game() {
  return (
    <div>
      <h1>Game Page</h1>
    </div>
  )
}
