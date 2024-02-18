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

//функция сортирующая рандомно елементы массива
export const getRandomArray=(array)=>{
  for(let i=array.length-1;i>0;i--){
    //переменная под последний елемент
    const tmp=array[i];
    //переменная под рандомное число которое выступит индексом
    const rnd=Math.floor(Math.random()*(i+1));
    //смена местами
    array[i]=array[rnd];
    array[rnd]=tmp;
  }
}

//функция сортирующая массив по количеству обсуждаемых
export const getDiscussedArray=(array)=>{
  array.sort((a,b)=>{
    return b.comments.length-a.comments.length;
  });
}
