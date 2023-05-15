import Title from '../Title'
import Parag from '../Paragraph'

import { Card, BtnLink } from './styles'

const Project = () => (
  <Card>
    <Title>Lista de tarefas</Title>
    <Parag tipo="secundario">Lista de tarefas feita com Vuejs</Parag>
    <BtnLink>Visualizar</BtnLink>
  </Card>
)

export default Project
