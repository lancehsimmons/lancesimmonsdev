import { Link, Switch, Route } from 'react-router-dom'
import Portfolio from './screens/Portfolio'
import AboutMe from './screens/AboutMe'
import Links from './components/Links'
import './App.css';
import { ReactComponent as FullStack } from './assets/Group 77.svg'
import Resume from './assets/Lance_Simmons_Software_Engineer.pdf'

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
            <div className='statement'>
              <p className='blue'>  As a <span className='red'>software engineer</span> with a background in a diverse <span className='red'>art</span> practice and a decade of technical support I seek to bring my <span className='red'>passion</span> for sharing in <span className='red'>creativity</span> to bear on every aspect of my life.</p>
            </div>
            <Links />
            
          </div>
        </Route>

        <Route path='/portfolio'><Portfolio /></Route>

        <Route path='/about-me'><AboutMe /></Route>
      </Switch>
    </div>
  );
}

export default App;
