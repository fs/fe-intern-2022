import styled from 'styled-components'

export const ModalBackground = styled.div`
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
`

export const ModalWindow = styled.div`
  padding: 20px;
  /* border-radius: 20px;
  background-color: #272d37; */
  height: fit-content;
  width: fit-content;
`
