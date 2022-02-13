
import { WordContext } from '../App';
import { useContext } from 'react';

const Secretbox =(props)=> {
  const wordsData = useContext(WordContext);
  

  return (
    <div className='secret'>
      {wordsData.usedLetters.includes(props.letter)?props.letter:<></>}
    </div>
  )
}

export default Secretbox