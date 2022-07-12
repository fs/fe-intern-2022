import { CustomLink } from '../styles/CustomLink.styled'
import Image from 'next/image'
import { Wrapper } from '../styles/Wrapper.styled'
import { Container } from '../styles/Container.styled'
import { Nav } from '../styles/Navbar.styled'
import { Button } from '../styles/Button.styled'

import logo from '../public/img/logo.svg'

export default function Navbar() {
  return (
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
            <Button bgColor="transparent">Sign in</Button>
          </Container>
        </Container>
      </Wrapper>
    </Nav>
  )
}
