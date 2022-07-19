import React, { useState } from 'react'

import Image from 'next/image'
import Modal from '../Modal/Modal'

import { Text } from 'styles/Typography/styles'
import {
  Nav,
  Wrapper,
  Container,
  Button,
  CustomLink,
  ModalContainer,
  LinksContainer,
} from './styles'

import logo from 'public/img/logo.svg'

function Navbar() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      {modalActive && (
        <Modal setActive={setModalActive}>
          <ModalContainer>
            <Text as="h4" fontSize="30px" fontWeight="bold">
              Oops, seems like there is nothing here
            </Text>
          </ModalContainer>
        </Modal>
      )}

      <Nav className="navbar">
        <Wrapper>
          <Container>
            <Image src={logo} alt="logo" width={140} height={40} />
            <LinksContainer>
              <CustomLink href="/" animation>
                Home
              </CustomLink>
              <CustomLink href="/" animation>
                Pokemons
              </CustomLink>
              <CustomLink href="/" animation>
                Game
              </CustomLink>
            </LinksContainer>
            <Container display="flex" flexDirection="row">
              <Button
                backgroundColor="transparent"
                onClick={() => setModalActive(true)}
              >
                Sign in
              </Button>
            </Container>
          </Container>
        </Wrapper>
      </Nav>
    </>
  )
}

export default Navbar
