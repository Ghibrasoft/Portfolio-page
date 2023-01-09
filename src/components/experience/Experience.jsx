import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h2>My experience</h2>
      <div className="container exp_container">

        <div className="exp_card">
          <h3>Front-end development</h3>
          <div className="exp_content">
            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <h5>HTML</h5>
                <small>Self-taught</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <h5>CSS</h5>
                <small>Self-taught</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>Javascript</p>
                <small>Self-taught</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>C++</p>
                <small>Studied in University</small>
              </div>
            </article>

          </div>
        </div>

        <div className="exp_card">
          <h3>Skills</h3>
          <div className="exp_content">

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>React</p>
                <small>Self-taught</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>Typescript</p>
                <small>Self-taught</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>SASS/SCSS</p>
                <small>Self-taught</small>
              </div>
            </article>

                        <article>
              <BsPatchCheckFill className='exp_icon'/>
              <div>
                <p>Git/Github</p>
                <small>Self-taught</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience