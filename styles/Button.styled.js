import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 16px;
  border-color: #1e50ff;
  padding: 12px 24px;
  font-size: ${props => props.fontSize || '16px'};
  font-weight: 600;
  background-color: ${props => props.bgColor};
  color: #fff;
  cursor: pointer;
  width: ${props => props.width || 'fit-content'};
`
