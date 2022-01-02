import React from 'react'
import './aboutme.css'
import Skills from '../components/Skills'
import Links from '../components/Links'
import Nav from '../components/Nav'

export default function AboutMe() {
  return (
    <div>

      <Nav/>

      <h1>Hi, I'm Lance. I'm working with a diverse stack to build full-stack apps and websites. I'm excited to continue expanding and learning. Please get in touch if you'd like to inquire about working together.</h1>

      <Skills/>
 
      <Links />
    </div>
  )
}
