import { Link, Switch, Route } from 'react-router-dom'
import Portfolio from './screens/Portfolio'
import AboutMe from './screens/AboutMe'
import Links from './components/Links'
import './App.css';
import { ReactComponent as FullStack } from './assets/Group 77.svg'
import Resume from './assets/Lance_Simmons_Software_Engineer_Resume.pdf'

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
              <p className='blue'>I’m an emerging <span className='red'>developer</span> working with a <span className='red'>diverse</span> tech stack as well as a broad <span className='red'>creative</span> skill-set to build <span className='red'>full-stack</span> apps and websites. Whether it's self-expression, digital tools, products, or apps, I love bringing <span className='red'>visions</span> to <span className='red'>life.</span></p>
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
