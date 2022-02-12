export const selectword = (array) =>{
    const getRandomInt = (max)=> {
        return Math.floor(Math.random() * max);
      }
  return array[getRandomInt(array.length)]    
}
