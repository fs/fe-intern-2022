import { ModalBackground, ModalWindow } from './styles'

const Modal = ({ setActive, children }) => {
  return (
    <>
      <ModalBackground onClick={() => setActive(false)}>
        <ModalWindow onClick={e => e.stopPropagation()}>{children}</ModalWindow>
      </ModalBackground>
    </>
  )
}

export default Modal
