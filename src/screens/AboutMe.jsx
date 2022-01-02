import React from 'react'
import { Link } from 'react-router-dom'
import './aboutme.css'
import Skills from '../components/Skills'
import Links from '../components/Links'
import Nav from '../components/Nav'

export default function AboutMe() {
  return (
    <div>
       <div >
        <Link className='home-div' to='/'>
          <div>
            <img className='home-logo'
              src='./images/home-logo.png' alt='spheres through screen symbol'/>
          </div>
          <div>
            <h3 className='full-stack-title'>
              <span className='white'> {` {{{`}</span>
              <span className='red'>HOME</span>
            </h3>
          </div>
        </Link>
      </div>

      <Nav/>

      <h1>Hi, I'm Lance. I'm working with a diverse tech stack to build full-stack apps and websites. I'm excited to continue expanding and learning. Please get in touch if you'd like to inquire about working together.</h1>

      <Skills/>
 
      <Links />
    </div>
  )
}
