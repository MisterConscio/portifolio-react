import { Parag } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <Parag tipo={tipo}>{children}</Parag>
)

export default Paragraph
