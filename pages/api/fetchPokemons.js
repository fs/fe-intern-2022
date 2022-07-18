export const fetchPokemons = async () => {
  const fetches = [...Array(10)].map(() => {
    const number = Math.floor(Math.random() * 900) + 1
    return fetch(`${process.env.API_URL}/${number}`)
  })

  const results = await Promise.allSettled(fetches)
  const filteredResults = results
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value)

  const responses = await Promise.all(filteredResults).then(res => {
    const responses = res.map(response => response.json())
    return responses
  })
  const pokemons = await Promise.all(responses)

  const pokemonsMinimized = pokemons.map(({ id, name, sprites, types }) => {
    return {
      id,
      name,
      img: sprites?.other.dream_world.front_default,
      types,
    }
  })

  return { pokemons, pokemonsMinimized }
}
