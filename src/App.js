import './App.css';
import { ReactComponent as FullStack } from './assets/full_stack.svg'

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title">
          <span className='blue'>WEB</span>
          <br/>
          <span className='red'>DEV</span></h1>
        <FullStack className='full-stack'/>
      </div>
    </div>
  );
}

export default App;
