import { ModalBackground, ModalWindow } from './styles'

const Modal = ({ setActive, children }) => {
  const handleModalClose = e => {
    e.stopPropagation()
    setActive(false)
  }
  return (
    <>
      <ModalBackground onClick={e => handleModalClose(e)}>
        <ModalWindow>{children}</ModalWindow>
      </ModalBackground>
    </>
  )
}

export default Modal
