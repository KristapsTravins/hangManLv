import Letter from './components/Letter';
import React, { useEffect, useState } from 'react';
import Secretbox from './components/Secret_box';
import './css/main.css';
import {selectword }from './Data/wordwork';
import data from './Data/letters.json';
import Score from './components/Score';
import Usedletter from './components/Usedletter';

export const WordContext = React.createContext([]);



function App() {
  const [guessedWords, setGuessedWords] = useState([''])
  const [secret,setSecret] = useState('');
  const [Wscore, setWScore] = useState(0);
  const [Lscore, setLScore] = useState(0)
  const [usedLetters,AddUsedLetters] = useState(['']);
  const wordData = {AddUsedLetters,usedLetters,setWScore,secret,Wscore,setLScore,Lscore,setGuessedWords,guessedWords};

  useEffect(() => {
    setSecret(selectword(data.names));
  }, [guessedWords])
  
 
  return (
    <div className="App">
       <WordContext.Provider value={wordData}>
      <div className='drawing'></div>
      <div className='word'>
      {
        secret.split('').map(i=>{return <Secretbox letter={i} />}) 
      }
      </div>
        <Score />
      <div className='letters'>
        {
          data.letters.map(i=>{return  usedLetters.includes(i)?<Usedletter letter={i}/>:<Letter letter={i} /> })
        }
      </div>
      </WordContext.Provider>
    </div>
  );
}

export default App;
