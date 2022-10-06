import Avatar from '../img/eu.png'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="imagem perfil" />
    <p className="title">Desenvolvedor FullStack</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Baixar Curriculo</a>
  </aside>
}

export default Sidebar