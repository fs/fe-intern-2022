import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ display, flexDirection, alignItems, gap, justifyContent }) => css`
    display: ${display};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
  `
)
