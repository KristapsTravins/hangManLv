import Letter from './components/Letter';
import Secret_box from './components/Secret_box';
import './css/main.css';
import data from './Data/letters.json';

function App() {
  return (
    <div className="App">
      <div className='drawing'></div>
      <div className='word'>
        <Secret_box secret="A" />
        <Secret_box secret="C" />
        <Secret_box secret="V" />
      </div>
      <div className='letters'>
        {
          data.letters.map(i=>{
            return  <Letter letter={i} />
          })
        }
       
      </div>
    </div>
  );
}

export default App;
