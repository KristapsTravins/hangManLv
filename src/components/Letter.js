import React, { useContext, useEffect } from 'react'
import { WordContext } from '../App';
import { countInst, countPoints } from '../Data/wordwork';
 
const Letter = (props) => {
  const wordsData = useContext(WordContext);
  useEffect(()=>{
    wordsData.setWScore(countPoints(wordsData.secret,wordsData.usedLetters));
  },[wordsData, wordsData.usedLetters])
  return (
    <div onClick={()=>{
     
        wordsData.AddUsedLetters([...wordsData.usedLetters,props.letter]);
        countInst(props.letter,wordsData.secret)===0?wordsData.setLScore(wordsData.Lscore + 1):<></>;
        console.log(wordsData.Wscore);
       
      
      
    }} className='letter'>{props.letter}</div>
  )
}

export default Letter