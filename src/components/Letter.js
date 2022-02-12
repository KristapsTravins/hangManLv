import React, { useContext } from 'react'
import { WordContext } from '../App';

 
const Letter = (props) => {
  const wordsData = useContext(WordContext);

  return (
    <div onClick={()=>{
      wordsData.AddUsedLetters([...wordsData.usedLetters,props.letter]);
      wordsData.secret.includes(props.letter)?wordsData.setWScore(wordsData.Wscore+1):wordsData.setLScore(wordsData.Lscore+1);
      
    }} className='letter'>{props.letter}</div>
  )
}

export default Letter