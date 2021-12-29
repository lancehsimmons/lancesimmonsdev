import { Link, Switch, Route } from 'react-router-dom'
import Portfolio from './screens/Portfolio'
import './App.css';
import { ReactComponent as FullStack } from './assets/Group 77.svg'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <div className='title-1-div column1'>
            <FullStack className='full-stack' />
            </div>
          <div className='content-div column'>
            <div className='lance-deco-div'>
            <div className='lance-div'>
              <h1 className="lance">
                <span className='blue'>LANCE</span>
                <span className='red'> SIMMONS</span>
              </h1>
              </div>
              </div>
            <div className='sub-title'>
              <div className='fs-container'>
                <div>
                  <h2 className='full-stack-title'>
                    <span className='white'> {` {{{`}</span>
                    <span className='red'>FULL</span>
                  </h2>
                </div>
                <h2 className='full-stack-title'>
                  <span className='blue'>STACK</span>
                </h2>
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
                        href='https://docs.google.com/document/d/1s_NQsBNisr4WyLuihdOOqQxq78PrDvwjx_WpIe3OR8o/edit?usp=sharing'>RESUME</a>
                    </span>
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
            <div className='statement'>
              <p className='blue'>  As a <span className='red'>software engineer</span> with a background in a diverse <span className='red'>art</span> practice and a decade of technical support I seek to bring my <span className='red'>passion</span> for sharing in <span className='red'>creativity</span> to bear on every aspect of my life.</p>
              </div>
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
        </Route>

        <Route path='/portfolio'><Portfolio /></Route>
      </Switch>
    </div>
  );
}

export default App;
