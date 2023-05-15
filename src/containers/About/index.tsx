import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSession } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
    </Paragraph>
    <GithubSession>
      <img src="https://github-readme-stats.vercel.app/api?username=MisterConscio&show_icons=true&theme=onedark&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MisterConscio&layout=compact&langs_count=7&theme=onedark" />
    </GithubSession>
  </section>
)

export default About
