import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiSass,
    DiReact,
    DiBootstrap,
    DiGithubBadge
} from 'react-icons/di'

import { SiVisualstudiocode } from "react-icons/si"

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id: "github", name: "Github", icon: <DiGithubBadge /> },
    { id: "vscode", name: "Vscode", icon: <SiVisualstudiocode /> },

]

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
              <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                    <h3>{tech.name}</h3>
                    
                </div>
              </div> 
            ))}
        </div>
    </section>
}
export default TechnologiesContainer