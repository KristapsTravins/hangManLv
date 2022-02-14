import Letter from './components/Letter';
import React, { useEffect, useState } from 'react';
import Secretbox from './components/Secret_box';
import './css/main.css';
import {countPoints, giveRnd, selectword ,findHint}from './Data/wordwork';
import data from './Data/letters.json';
import {Score,Lose} from './components/Score';
import Usedletter from './components/Usedletter';
import Drawing from './components/Drawing';
import Hint from './components/Hint';

export const WordContext = React.createContext([]);



function App() {
  const [guessedWords, setGuessedWords] = useState(['']);
  const [secret,setSecret] = useState('');
  const [hint, sethint] = useState('');
  const [Wscore, setWScore] = useState(0);
  const [Lscore, setLScore] = useState(0)
  const [usedLetters,AddUsedLetters] = useState(['']);
  const [total,setTotal] =useState(0);
  const wordData = {total,setTotal,AddUsedLetters,usedLetters,setWScore,secret,Wscore,setLScore,Lscore,setGuessedWords,guessedWords};

  const giveHint = (word) =>{
    sethint(findHint(data.names,word))
  }

  useEffect(() => {
    const Sword = selectword(data.names,guessedWords);
    AddUsedLetters(giveRnd(Sword));
    setSecret(Sword);
    giveHint(Sword);
  }, [guessedWords])

  useEffect(()=>{
    setWScore(countPoints(secret,usedLetters));
  },[usedLetters])
  
 
  return (
    <div className="App">
       <WordContext.Provider value={wordData}>
      <div className='drawing'>
        <Drawing loseRes={Lscore} />
      </div>
      <div className='word'>
      {
        secret.split('').map(i=>{return <Secretbox letter={i.toUpperCase()} />}) 
      }
      </div>
        <Score />
        <Hint hint={hint} />
        {Lscore === 8?<Lose secret={secret} />:<></>}
        {Lscore !== 8?<div className='letters'>{data.letters.map(i=>{return  usedLetters.includes(i)?<Usedletter letter={i}/>:<Letter letter={i} /> })}</div>:<></>}
      </WordContext.Provider>
    </div>
  );
}

export default App;
