import {DiHtml5, DiCss3, DiJsBadge, DiPhp, DiReact, DiMysql} from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name: 'HATML5', icon: <DiHtml5 />},
  { id: 'css', name: 'CSS3', icon: <DiCss3 />},
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
  { id: 'php', name: 'PHP', icon: <DiPhp />},
  { id: 'react', name: 'React', icon: <DiReact />},
  { id: 'mysql', name: 'MySql', icon: <DiMysql />},
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tempora, vitae harum impedit quis optio repellendus magni nesciunt magnam. Quidem assumenda laborum possimus repellendus accusamus, culpa ullam et. Excepturi, voluptate.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer