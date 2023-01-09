import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'
import {VscBook} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <div className="container about_container">

        <article className="about_card">
          <VscBook className='about_icon'/>
            <h3>Education</h3>
            <small>Akaki Tsereteli State University , Computer sience</small>
        </article>

        <article className="about_card">
            <VscProject className='about_icon'/>
            <h3>Projects</h3>
        </article>

        <article className="about_card">
          <FaAward className='about_icon'/>
            <h3>Experience</h3>
            <small>Not yet...</small>
        </article>
        
      </div>
    </section>
  )
}

export default About