import './App.css';
import { ReactComponent as FullStack } from './assets/Group 77.svg'

function App() {
  return (
    <div className="App">

      <div className='title-1-div column'>
        <FullStack className='full-stack' />
      </div>
      <div className='content-div column'>
        <div className='lance-div'>
          <h1 className="lance">
            <span className='blue'>LANCE</span>
            <span className='red'> SIMMONS</span>
          </h1>
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
          <div className='links'>
            <div className='resume'>
            <h3>
              <span className='blue'>RESUME</span>
            </h3>
            </div>
            <div>
            <h3>
              <span className='red'>PORTFOLIO</span>
            </h3>
            </div>
          </div>
        </div>
        <div className='statement'>
            <p className='blue'>  As a <span className='red'>software engineer</span> with a background in a diverse <span className='red'>art</span> practice and a decade of technical support I seek to bring my <span className='red'>passion</span> for sharing in <span className='red'>creativity</span> to bear on every aspect of my life.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
