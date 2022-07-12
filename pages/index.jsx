function Poke({ pokes }) {
  let pokeNames = Object.entries(pokes)
  return (
    <ul>
      <h1>Poke count{pokes.count}</h1>
      <h1>Poke Names</h1>
      <ul>
        {pokeNames[3][1].map(pokeName => (
          <li key={pokeName.name}>{pokeName.name}</li>
        ))}
      </ul>
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${randomNum(0, 1154)}`
  )
  const pokes = await res.json()

  return {
    props: {
      pokes,
    },
  }
}
function randomNum(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

export default Poke
