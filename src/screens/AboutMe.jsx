import React from 'react'
import './aboutme.css'
import Skills from '../components/Skills'
import Links from '../components/Links'
import Nav from '../components/Nav'

export default function AboutMe() {
  return (
    <div>

      <Nav />

      <div className='statement aboutme'>
        <div className='about-opener'>
          <div>
            <img className='me'
              src='./images/me.png' alt='Lance Simmons'></img>
          </div>
          <p className='about-opener-p'>Hi, I'm <span className='red'>Lance,</span> an emerging <span className='red'>developer</span> living in Philadelphia, Pennsylvania.</p>
        </div>
        <p className='about-body'>I've spent the past ten years working in technical support all the while pursuing <span className='red'>creative growth</span> in my personal and community work. Most recently I've channeled my creativity and  meticulous eye for detail into <span className='red'>software development</span>.</p>
        <p className='about-body'>I'm working with a <span className='red'>diverse</span> tech stack as well as a broad creative skill-set to build full-stack apps and websites. Whether it's <span className='red'>self-expression, digital tools, products, or apps,</span> I love bringing visions to life. I'm open for work and excited to contribute so please, <span className='red'>get in touch</span> if you'd like to inquire about working together.</p>
        <a target="_blank"
          rel="noopener noreferrer"
          href='mailto:lancehowardsimmons@gmail.com'>
          <h4 className='contact red'>lancehowardsimmons@gmail.com</h4>
        </a>
      </div>
      <div className='tools red'>
        <h2>Tools in my belt:</h2>
      </div>
      <Skills />
      <Links />
    </div>
  )
}
