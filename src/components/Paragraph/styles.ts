import styled from 'styled-components'

import { Props } from '.'

export const Parag = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.primaryColor
      : props.theme.secundaryColor};
  line-height: 22px;
`
