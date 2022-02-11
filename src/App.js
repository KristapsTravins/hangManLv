import Letter from './components/Letter';
import React, { useEffect, useState } from 'react';
import Secretbox from './components/Secret_box';
import './css/main.css';
import selectword from './Data/wordwork';
import data from './Data/letters.json';




function App() {
  const [secret,setSecret] = useState('');
  
  useEffect(() => {
    setSecret(selectword(data.names));
  }, [])
  
 
  return (
    <div className="App">
      <div className='drawing'></div>
      <div className='word'>
      {
        secret.split('').map(i=>{return <Secretbox letter={i} />}) 
      }
      </div>
      <div className='letters'>
        {
          data.letters.map(i=>{return  <Letter letter={i} />})
        }
       
      </div>
    </div>
  );
}

export default App;
