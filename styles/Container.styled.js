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
    flexWrap,
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
    flex-wrap: ${flexWrap};
  `
)
