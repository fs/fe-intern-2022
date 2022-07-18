import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  padding: 40px;
`
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
`

export const Button = styled.button(
  ({ backgroundColor, theme }) => css`
    border-radius: 16px;
    border-color: ${theme.primaryColor};
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${backgroundColor};
    color: ${theme.text};
    cursor: pointer;
    width: fit-content;
  `
)

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`
export const CustomLink = styled.a(
  ({ animation, theme }) => css`
    color: ${theme.gray500};
    text-decoration: none;
    cursor: pointer;
    position: ${animation && 'relative'};
    outline: none;
    animation: ${animation &&
    `
          display: inline-block;
          :after{
            content: '';
            position: absolute;
            width: 80%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${theme.underline};
            transform-origin:bottom right;
            transition: transform 0.25s ease-out;
          }
          :hover:after{
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `};

    :hover {
      color: ${theme.text};
      transition: color 0.15s ease;
    }
  `
)

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
