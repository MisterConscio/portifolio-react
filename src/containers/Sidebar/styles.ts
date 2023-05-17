import styled from 'styled-components'
import { Parag } from '../../components/Paragraph/styles'

export const Desc = styled(Parag)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BtnTheme = styled.button`
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: 700;
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

export const Aside = styled.aside`
  @media (max-width: 768px) {
    text-align: center;
  }
`
