import React from 'react'
import './links.css'

export default function Links() {
  return (
    <div>
      <div className='links'>
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href='mailto:lancehowardsimmons@gmail.com'>
                  <img src='./images/mail.png' alt='email symbol'/>
                </a>
              </div>
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href='https://github.com/lancehsimmons'>
                  <img src='./images/github.png' alt='github logo'/>
                </a>
              </div>
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href='https://www.linkedin.com/in/lance-simmons/'>
                  <img src='./images/linked.png' alt='linked in logo'/>
                </a>
              </div>
            </div>
    </div>
  )
}
