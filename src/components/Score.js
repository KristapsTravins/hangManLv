import React, { useContext } from 'react';
import { WordContext } from '../App';


export const Score = (props) => {
    const wordsData = useContext(WordContext);
  
    const nextlvl = () =>{
        wordsData.setGuessedWords([...wordsData.guessedWords,wordsData.secret]);
        wordsData.AddUsedLetters([]);
        wordsData.setWScore(0);
        wordsData.setLScore(0);
        wordsData.setTotal(wordsData.total+1)
    }
    
  return (
    <div className='scoreboard'>
    <div className='score'>
    <h5>Vārdi atminēti : {wordsData.total} </h5> 
    </div> 
    {wordsData.Wscore === wordsData.secret.length?<div onClick={()=>nextlvl()} className='next_word'><h5>Nākamais vārds</h5></div>:<></>}
        
    </div>
  )
}

export const Lose = (props) =>{
    const wordsData = useContext(WordContext);
    const reset = () =>{
        wordsData.setGuessedWords(['']);
        wordsData.AddUsedLetters([]);
        wordsData.setWScore(0);
        wordsData.setLScore(0);
        wordsData.setTotal(0);
    }
    return(
    <div className='you_lose'>
    <p>Diemžēl tu neatminēji šo vārdu:</p>
    <h3>{props.secret}</h3>
    <div onClick={()=>reset()} className='resetBtn'>
      <h5>Sākt no jauna</h5>
    </div>
  </div>
    )
};


