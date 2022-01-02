import React from 'react'
import { Link } from 'react-router-dom'
import './aboutme.css'
import Skills from '../components/Skills'
import Links from '../components/Links'

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

      <h1>Hi, I'm Lance.</h1>

      <Skills/>
 
      <Links />
    </div>
  )
}
