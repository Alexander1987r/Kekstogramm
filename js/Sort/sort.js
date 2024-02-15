import { renderingPhotos } from "../Pictures/pictures.js";
import { photoDescriptionArr } from "../Pictures/pictures.js";

//формируем переключение активного тогла
//найдем список  переключения активного тогла сортировки изо
const navigationList=document.querySelector('.navigation__list');

//создадим копию массива
const photoArrCopy=photoDescriptionArr.slice();


//найдем секцию загрузки фотографий пользователей
const picturesWrapper=document.querySelector('.pictures-wrapper');

//повесим слушатель на список(делегирование)
navigationList.addEventListener('click',(evt)=>{
 const {target}=evt;
//ставим условие по клику на тоглы
if( (target.tagName === 'BUTTON') && (!target.classList.contains('navigation__item-button_active'))){
   //найдем активный тогл
   const navigationButtonActive=navigationList.querySelector('.navigation__item-button_active');
   //удалим у него класс active
   navigationButtonActive.classList.remove('navigation__item-button_active');
   //targetу добавим класс
   target.classList.add('navigation__item-button_active');
   //переменная с id
   const filterName=target.id;
   const sortArray=(filter)=>{
    switch (filter){
      case 'filter-default':
        picturesWrapper.innerHTML='';
        renderingPhotos(photoDescriptionArr);
        console.log('def');
        break;
      case 'filter-random':
        for(let i=photoArrCopy.length-1;i>0;i--){
          //переменная под последний елемент
          const tmp=photoArrCopy[i];
          //переменная под рандомное число которое выступит индексом
          const rnd=Math.floor(Math.random()*(i+1));
          //смена местами
          photoArrCopy[i]=photoArrCopy[rnd];
          photoArrCopy[rnd]=tmp;
        }
        picturesWrapper.innerHTML='';
        renderingPhotos(photoArrCopy);
        console.log('rand');
        break;
      case 'filter-discussed':
        photoArrCopy.sort((a,b)=>{
        return b.comments.length-a.comments.length;
        });
        picturesWrapper.innerHTML='';
        renderingPhotos(photoArrCopy);
        console.log('disk');
        break;
    }
    return photoArrCopy;
   }
   sortArray(filterName);
}});










