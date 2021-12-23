import './portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div>
      <div >
        <Link className='home-div' to='/lancedev'>
          <div>
            <img className='home-logo'
              src='./images/home-logo.png' />
          </div>
          <div>
            <h3 className='full-stack-title'>
              <span className='white'> {` {{{`}</span>
              <span className='red'>HOME</span>
            </h3>
          </div>
        </Link>
      </div>

      <div className='piece'>
        <div className='piece-title-div'>
          <a href='https://roast-lancedev.surge.sh/</div>'>
            <img className='thumb'
              src='./images/roast-thumbnail.png' />
          </a>
          <h2 className='red piece-title'>ROAST</h2>
          <a href='https://github.com/lancehsimmons/Roast'>
            <img className='github'
              src='./images/github.png' />
          </a>
        </div>
        <p className='blue'>  Roast is a dynamic, precision home coffee roasting log. A full-stack web application providing full CRUD, built on Ruby on Rails and React. Users can create and edit log entries for their latest coffee roasts. Perfecting roasts on your favorite beans is a laborious process. I've created Roast to give home-roasters like myself the tools they need to achieve the ideal bean.
        </p>
      </div>

      <div className='piece'>
        <div className='piece-title-div'>
          <a href='https://everfree-outdoors.netlify.app/'>
            <img className='thumb'
              src='./images/everfree-thumbnail.png' />
          </a>
          <h2 className='red piece-title'>EVERFREE OUTDOORS</h2>
          <a href='https://github.com/lancehsimmons/HEED'>
            <img className='github'
              src='./images/github.png' />
          </a>
        </div>
        <p className='blue'>  Everfree Outdoors is a fully functioning CRUD full-stack prototype for an e-commerce site. The fauxe company Everfree brings together a team of developers to provide a one-stop shop for gearing up for new adventures. The focus of this project was to produce a full-stack app built on the MERN stack as a team. Coming together to share creativity and skills was a true pleasure.
        </p>
      </div>

      <div className='piece'>
        <div className='piece-title-div'>
          <a href='https://lancehsimmons.github.io/HEED'>
            <img className='thumb'
              src='./images/heed-thumbnail.png' />
          </a>
          <h2 className='red piece-title'>HEED</h2>
          <a href='https://github.com/anelisekathryn/EverFree-Outdoors'>
            <img className='github'
              src='./images/github.png' />
          </a>
        </div>
        <p className='blue'>  An early warning Asteroid Cataclysm Tracker. HEED consumes active data from the Near Earth Object Web Service NASA api and presents select information in a playful and engaging interface. Built on raw HTML, CSS, and Javascript, HEED was conceived of as an exercise in basic front-end api functionallity.
        </p>
      </div>

      <div className='links'>
              <div>
                <a href='mailto:lancehowardsimmons@gmail.com'>
                  <img src='./images/mail.png' />
                </a>
              </div>
              <div>
                <a href='https://github.com/lancehsimmons'>
                  <img src='./images/github.png' />
                </a>
              </div>
              <div>
                <a href='https://www.linkedin.com/in/lance-simmons/'>
                  <img src='./images/linked.png' />
                </a>
              </div>
            </div>
      
    </div>
  )
}