
import { photoDescriptionArr } from "../Pictures/pictures.js";

//формируем переключение активного тогла
//найдем список  переключения активного тогла сортировки изо
const navigationList=document.querySelector('.navigation__list');

//повесим слушатель на список(делегирование)
navigationList.addEventListener('click',(evt)=>{
  const {target}=evt;
 //ставим условие по клику на тоглы
if(target.tagName === 'BUTTON'){
  if(target.classList.contains('navigation__item-button_active')){
  return;
  };
  //найдем активный тогл
  const navigationButtonActive=navigationList.querySelector('.navigation__item-button_active');
  //удалим у него класс active
  navigationButtonActive.classList.remove('navigation__item-button_active');
  //targetу добавим класс
  target.classList.add('navigation__item-button_active');
}
});

const sortPhotoDescriptionMessage=photoDescriptionArr;




sortPhotoDescriptionMessage.sort((a,b)=>{
  if(a.comments.length > b.comments.length){
    return -1;
  }else{
    return 1;
  }
});
console.log(sortPhotoDescriptionMessage);








