import Image from 'next/image'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em auto;
  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`

const Question = styled.div`
  width: 70%;
  margin: 0 auto;
`
const Option = styled.button`
  display: block;
  border: 1px solid #616a94;
  border-radius: 15px;
  padding: 10px 20px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  font-size: 1em;
  outline: none;
  user-select: none;
  cursor: pointer;
  @media screen and (min-width: 1180px) {
    &:hover {
      color: white;
      background-color: #616a94;
    }
  }
`

const QuizWindow = styled.div`
  text-align: center;
  font-size: clamp(20px, 2.5vw, 24px);
  margin-top: 5vh;
`
const Title = styled.h1`
  margin-top: 4em;
  font-size: 48px;
`

const Points = styled.p`
  font-size: 24px;
  margin-bottom: 3em;
`
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
    <QuizWindow>
      {/* game loop  */}
      {questionsAnswered < 10 && question && (
        <Question>
          {/* <h1>You Answered {questionsAnswered}/10</h1> */}
          <>
            <Image
              src={question.image}
              height="200px"
              width="200px"
              alt="poke"
            />
            <ul>
              {question.options.map((answer, index) => (
                <Options key={index}>
                  <Option onClick={pickAnswer} key={index}>
                    {answer}
                  </Option>
                </Options>
              ))}
            </ul>
          </>
        </Question>
      )}

      {/* gameover */}
      {questionsAnswered === 10 && (
        <QuizWindow>
          <Title>Game Over! </Title>
          <Points>You guessed {pts} out of 10</Points>
          <Options>
            <Option onClick={() => restartGame()}>Play Again!</Option>
          </Options>
        </QuizWindow>
      )}
    </QuizWindow>
  )
}
