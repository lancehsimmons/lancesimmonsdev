import React from 'react'
import { Link } from 'react-router-dom'
import Resume from '../assets/Lance_Simmons_Full_Stack_Resume.pdf'
import '../components/nav.css'

export default function Nav() {
  return (
    <div className='sub-title-nav'>
      <div >
        <Link className='home-div' to='/'>
          <div>
            <img className='home-logo'
              src='./images/home-logo.png' alt='spheres through screen symbol'/>
          </div>
          <div>
            <h3 className='full-stack-title'>
              <span className='white'> {` {{{`}</span>
              <span className='gohome red'>HOME</span>
            </h3>
          </div>
        </Link>
      </div>
      <div className='slash'>
                <span className='white'>/</span>
              </div>
              <div className='screens'>
                <div className='resume'>
                  <h3>
                    <span className='blue'>
                      <a target="_blank"
                        rel="noopener noreferrer"
                        href={Resume}>RESUME</a>
                    </span>
                  </h3>
                </div>
                <div >
                  <h3>
                    <Link to='/about-me'>
                      <span className='red portfolio'>
                        ABOUT ME
                      </span>
                    </Link>
                  </h3>
                </div>
                <div >
                  <h3>
                    <Link to='/portfolio'>
                      <span className='red portfolio'>
                        PORTFOLIO
                      </span>
                    </Link>
                  </h3>
        </div>
        </div>
    </div>
  )
}
