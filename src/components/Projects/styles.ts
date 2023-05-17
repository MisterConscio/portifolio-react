import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const BtnLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.backgroundBtnColor};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
`
