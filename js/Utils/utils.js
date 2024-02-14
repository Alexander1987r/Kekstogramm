//функция getRandomPositiveInteger, возвращающая случайное целое число из переданного диапазона включительно
export const getRandomPositiveInteger=(minValue,maxValue)=>{
       const lower=Math.ceil(Math.min(Math.abs(minValue),Math.abs(maxValue)));
       const upper=Math.floor(Math.max(Math.abs(minValue),Math.abs(maxValue)));
       const result=Math.random()*(upper-lower+1)+lower;
    return Math.floor(result);
 }
   
//функция getRandomArrayElement возвращающая случайный елемент массива
export const getRandomArrayElement=(element)=>{
       return element[getRandomPositiveInteger(0,element.length-1)];
}