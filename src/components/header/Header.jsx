import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {TfiUser} from 'react-icons/tfi'
import {BsChevronDoubleDown} from 'react-icons/bs'
import PropTypes from 'prop-types'

function Header({text_1, text_2}) {
  return (
    <section id='home'>
      <header>
        <div className="container header_container">
          <h1>{text_1}</h1>
          <p className='light-text'>{text_2}</p>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <TfiUser />
          </div>

          <a href="#contact" className='scroll_down'><BsChevronDoubleDown /></a>
        </div>
      </header>
    </section>
  )
}

Header.defaultProps = {
  text_1: "Hi I'm David",
  text_2: "Front-end developer"
}
Header.propTypes = {
  text: PropTypes.string
}

export default Header