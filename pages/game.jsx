import Image from 'next/image'
import { useState, useEffect } from 'react'

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=500&offset=0`
  const res = await fetch(url)
  const pokes = await res.json()

  const { results } = pokes

  // array of pokemon names
  const pokeNames = results.map(object => object.name)

  return {
    props: {
      pokeNames,
    },
  }
}

export default function Game({ pokeNames }) {
  const [question, setQuestion] = useState()
  const [pts, setPts] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)

  const getRandomID = Math.floor(Math.random() * pokeNames.length)

  // Change order of elements randomly
  const shuffle = arr => arr.sort(() => Math.random() - 0.5)

  // Getting user's answer and checking if correct
  const pickAnswer = e => {
    let userAnswer = e.target.outerText

    // If answer is correct +1 point
    if (question.answer === userAnswer) setPts(pts + 1)
    setQuestionsAnswered(questionsAnswered + 1)
  }

  useEffect(() => {
    function getQuestion() {
      // Shuffling names array, so everytime first 3 element will be different
      const setOpts = shuffle([...pokeNames])

      // 3 wrong answers, total 4 answers
      const opts = setOpts.slice(0, 3)

      // First element of array = 0, first id = 1
      const pokeName = pokeNames[getRandomID - 1]

      setQuestion({
        answer: pokeName,
        options: shuffle([...opts, pokeName]),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getRandomID}.svg`,
      })
    }

    getQuestion()
  }, [questionsAnswered])

  // Reset stats to start game
  function restartGame() {
    setQuestionsAnswered(0)
    setPts(0)
  }

  return (
    <div>
      {/* game loop  */}
      {questionsAnswered < 10 && question && (
        <div>
          <h1>You Answered {questionsAnswered}/10</h1>
          <Image src={question.image} height="300px" width="300px" alt="poke" />
          <ul>
            {question.options.map((answer, index) => (
              <li key={index}>
                <button onClick={pickAnswer} key={index}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* gameover */}
      {questionsAnswered === 10 && (
        <>
          <h1>Game Over! Your Result: {pts}/10</h1>
          <button onClick={() => restartGame()}>Play Again!</button>
        </>
      )}
    </div>
  )
}
