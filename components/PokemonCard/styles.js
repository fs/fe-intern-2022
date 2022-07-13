import styled, { css } from 'styled-components'
export const Container = styled.div(
  ({
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    backgroundColor,
    position,
    maxWidth,
    margin,
    padding,
    width,
  }) => css`
    display: ${display};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
    position: ${position};
    background-color: ${backgroundColor};
    width: ${width};
    max-width: ${maxWidth};
    margin: ${margin};
    padding: ${padding};
  `
)

export const Type = styled.div(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    color: #fff;
    border-radius: 10px;
    padding: 2px 8px;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
  `
)

export const PokeImageContainer = styled.div(
  ({ top, right }) => css`
    position: absolute;
    top: ${top}px;
    right: ${right}px;
  `
)

export const Divider = styled.div(
  ({ borderColor, height }) => css`
    border-right: 1px solid ${borderColor};
    height: ${height};
  `
)
