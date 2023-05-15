import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Parag from '../../components/Paragraph'

import { Desc, BtnTheme } from './styles'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Title fontSize={20}>Saulo Costa</Title>
    <Parag tipo="secundario">MisterConscio</Parag>
    <Desc tipo="principal" fontSize={12}>
      Engenheiro Front-End
    </Desc>
    <BtnTheme>Trocar tema</BtnTheme>
  </aside>
)

export default Sidebar
