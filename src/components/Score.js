import React, { useContext, useState } from 'react';
import { WordContext } from '../App';

const Score = (props) => {
    const wordsData = useContext(WordContext);
    const [total,setTotal] = useState(0);
    console.log(wordsData.guessedWords);
    const nextlvl = () =>{
        
        wordsData.setGuessedWords([...wordsData.guessedWords,wordsData.secret]);
        wordsData.AddUsedLetters([]);
        wordsData.setWScore(0);
        wordsData.setLScore(0);
        setTotal(total + 1);
    }
  return (
    <div className='scoreboard'>
    <div className='score'>
    <h5>Vārdi atminēti : {total} </h5>
    </div> 
    {wordsData.Wscore + 1 === wordsData.secret.length?<div onClick={()=>nextlvl()} className='next_word'><h5>Nākamais vārds</h5></div>:<></>}
        
    </div>
  )
}

export default Score