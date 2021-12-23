import './App.css';
import { ReactComponent as FullStack } from './assets/lance-dev-logo.svg'

function App() {
  return (
    <div className="App">
      {/* <div className='title-1-div'>
        <div>
          <h1 className="title">
            <span className='blue'>WEB</span>
            <br />
            <span className='red'>DEV</span>
          </h1>
        </div>
        <FullStack className='full-stack' />
      </div> */}
      <div className='title-1-div'>
        <FullStack className='full-stack' />
      </div>
      <div className='conent-div'>
        <div className='lance-div'>
          <h1 className="lance">
            <span className='blue'>LANCE</span>
            <span className='red'>SIMMONS</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
