import { closeUploadPicture } from "../Upload/uploadFile.js";

const body=document.body;

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

//функция вывода на екран сообщения об ошибке при недоступном сервере
export const showAlert=(message)=>{
  const alertContainer=document.createElement('div');
  alertContainer.style.position='absolute';
  alertContainer.style.zIndex='1';
  alertContainer.style.left='0';
  alertContainer.style.top='0';
  alertContainer.style.right='0';
  alertContainer.style.padding='10px 3px';
  alertContainer.style.fontSize='26px';
  alertContainer.style.textAlign='center';
  alertContainer.style.backgroundColor='red';
  alertContainer.style.color='white';

  alertContainer.textContent=message;
  document.body.append(alertContainer);

  //ставим таймер
  setTimeout(()=>{
    alertContainer.remove();
  },5000);
}

//функция успешной отправки данных
export const onUploadSuccess=()=>{
  //нахожу template с удачным извещением
  const success=document.querySelector('.success').content.querySelector('.success__inner');
  const successTemplate=success.cloneNode(true);
  closeUploadPicture();
  body.appendChild(successTemplate);
  successTemplate.addEventListener('click',()=>{
   successTemplate.remove();
  });
 }
 //функция не успешной отправки данных
 export const onUploadError=()=>{
   //нахожу template с удачным извещением
   const error=document.querySelector('.error').content.querySelector('.error__inner');

   const errorTemplate=error.cloneNode(true);
   closeUploadPicture();
   body.appendChild(errorTemplate);
   errorTemplate.addEventListener('click',()=>{
    errorTemplate.remove();
   });
  }
