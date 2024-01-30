import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'
import DownloadButton from './DownloadButton'




const Sidebar = () => {
    return ( 
    <aside id="sidebar">
        <img src={Avatar} alt="Cher Oliboni Luza" />
        <p className="title">Desenvolvedora Frontend Junior</p>
        <SocialNetworks />
        <InformationContainer />
        <DownloadButton />
    </aside>
    )
}
export default Sidebar