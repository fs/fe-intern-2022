import { Container, Filler } from './styles'

const ProgressBar = props => {
  return (
    <>
      <Container backgroundColor={props.bgcolor}>
        <Filler completed={props.completed} backgroundColor={props.bgcolor} />
      </Container>
    </>
  )
}

export default ProgressBar
