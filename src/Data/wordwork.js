
 const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}
export const selectword = (array,guessedWords) =>{
  let word = array[getRandomInt(array.length)]['vards'];
  while(guessedWords.includes(word)&& guessedWords[guessedWords.length -1].charAt(0) === word.charAt(0)){
   word = array[getRandomInt(array.length)]['vards'];
  }
  return word
}

export const countInst = (char,secret) =>{ 
  const how = secret.toUpperCase().split('').filter(c=>c.includes(char));
  return how.length
}
export const giveRnd =(secret)=>{
  const how = secret.toUpperCase().split('');
  let random = [how[getRandomInt(secret.length)],how[getRandomInt(secret.length)],how[getRandomInt(secret.length)]];
  return random;
}
export const countPoints = (secret,usedLetters) =>{
 let a = secret.toUpperCase().split('');
 let counter = 0;
 a.forEach(element => {
   usedLetters.includes(element)?counter++:<></>;
 }); 
 return counter
}

export const findHint = (array,secret) =>{
let answ;
 array.map(i=> i['vards']===secret?answ = i['skaidrojums']:<></>);
 console.log(answ);
 return answ;
}