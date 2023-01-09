import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineCodepenCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/david-ghibradze-929023247/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Ghibrasoft/My-mini-projects" target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href="https://codepen.io/collection/rxpNLZ" target='_blank' rel='noreferrer'><AiOutlineCodepenCircle /></a>
    </div>
  )
}

export default HeaderSocials