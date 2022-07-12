// const getRandomNum = (min, max) => {
//   let rand = min - 0.5 + Math.random() * (max - min + 1)
//   return Math.round(rand)
// }

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset=0}`
  const res = await fetch(url)
  const pokes = await res.json()

  const { results } = pokes

  const randomNum = Math.floor(Math.random() * (results.length - 1))
  const randomPokemon = results[randomNum]
  const resPoke = await fetch(randomPokemon.url)
  const randomPokeObj = await resPoke.json()
  console.log(randomPokeObj)

  return {
    props: {
      pokes,
    },
  }
}

function Poke() {
  // const [randomPoke, setRandomPoke] = useState('Pokemon')
  // let pokeAll = Object.entries(pokes)

  // console.log(pokes)
  // let pokeInfo = []
  // pokeAll[3][1].map(names => pokeInfo.push(names))
  //
  // let pokeNames = pokeInfo.map(a => a.name)

  // Finding api url of generated Pokemon
  // const pokeObj = randomPoke
  //   ? pokes['results'].find(item => item.name === randomPoke)
  //   : ''
  // console.log(pokeObj['url'])

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
      <h1>Poke Names</h1>
    </>
  )
}

export default Poke
