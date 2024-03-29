import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/cher-o-14aa92115/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/CherLuza"  },
    
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
}
export default SocialNetworks