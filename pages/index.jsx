function Poke({ pokes }) {
  let pokeAll = Object.entries(pokes)
  let pokeInfo = []
  pokeAll[3][1].map(names => pokeInfo.push(names))

  let pokeNames = pokeInfo.map(a => a.name)

  return (
    <>
      <h1>Poke Names</h1>
      <ul>
        {pokeNames.map(pokeName => (
          <li key={pokeName.id}>{pokeName}</li>
        ))}
      </ul>
    </>
  )
}

const getRandomNum = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset${getRandomNum(0, 1154)}`
  const res = await fetch(url)
  const pokes = await res.json()

  return {
    props: {
      pokes,
    },
  }
}

export default Poke
