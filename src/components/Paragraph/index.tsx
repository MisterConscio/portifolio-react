import { Parag } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <Parag fontSize={fontSize} tipo={tipo}>
    {children}
  </Parag>
)

export default Paragraph
