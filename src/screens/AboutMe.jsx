import React from 'react'
import { Link } from 'react-router-dom'
import './aboutme.css'

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
      <div>
      <i className="devicon-html5-plain-wordmark"></i>
      </div>
      <div>
      <i className="devicon-css3-plain-wordmark"></i>
      </div>
      <div>
      <i className="devicon-javascript-plain"></i>
      </div>
      <div>
      <i className="devicon-react-original-wordmark"></i>
    </div>
      <div>
      <i className="devicon-ruby-plain-wordmark"></i>
    </div>
      <div>
      <i className="devicon-rails-plain-wordmark"></i>
    </div>
      <div>
      <i className="devicon-mongodb-plain-wordmark"></i>
    </div>
      <div>
      <i className="devicon-git-plain-wordmark"></i>
    </div>
      <div>
      <i className="devicon-github-original-wordmark"></i>
    </div>
      <div>
      <i className="devicon-nodejs-plain"></i>
    </div>
      <div>
      <i className="devicon-postgresql-plain-wordmark"></i>
    </div>
      <div>
      <i className="devicon-figma-plain"></i>
    </div>
      <div>
      <i className="devicon-slack-plain"></i>
    </div>
    </div>
  )
}
