
 const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}
export const selectword = (array) =>{
   
  return array[getRandomInt(array.length)]    
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