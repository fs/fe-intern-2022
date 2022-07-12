import React, { useState } from 'react'

import Image from 'next/image'
import Modal from '../Modal/Modal'

import { Header } from 'styles/Typography/styles'
import { Nav, Wrapper, Container, Button, CustomLink } from './styles'

import logo from '../../public/img/logo.svg'

function Navbar() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      {modalActive && (
        <Modal setActive={setModalActive}>
          <Container
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="15px"
          >
            <Header as="h4" fontSize="30px" fontWeight="bold" color="#fff">
              Log in
            </Header>
          </Container>
        </Modal>
      )}

      <Nav className="navbar">
        <Wrapper>
          <Container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={logo} alt="logo" width={140} height={40} />
            <Container display="flex" flexDirection="row" gap="32px">
              <CustomLink href="/" animation="true">
                Home
              </CustomLink>
              <CustomLink href="/" animation="true">
                Pokemons
              </CustomLink>
              <CustomLink href="/" animation="true">
                Game
              </CustomLink>
            </Container>
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
