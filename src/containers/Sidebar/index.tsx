import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Parag from '../../components/Paragraph'

import { Desc, BtnTheme, Aside } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <Aside>
    <Avatar />
    <Title fontSize={20}>Saulo Costa</Title>
    <Parag tipo="secundario">MisterConscio</Parag>
    <Desc tipo="principal" fontSize={12}>
      Engenheiro Front-End
    </Desc>
    <BtnTheme onClick={props.changeTheme}>Trocar tema</BtnTheme>
  </Aside>
)

export default Sidebar
