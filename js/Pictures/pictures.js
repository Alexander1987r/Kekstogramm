

//получим обьект начальная база данных
import { initialData } from '../Data/initialData.js';

//получим массив обьектов описания фото пользователя
import { getDescriptionPhoto } from "../Data/createData.js";

//получим наш массив обьектов описывающих фото пользователя
const photoDescriptionArr=getDescriptionPhoto(initialData);


//найдем секцию загрузки фотографий пользователей
const picturesWrapper=document.querySelector('.pictures-wrapper');

//найдем шаблон отрисовки фотографии пользователя
const picturesTemplate=document.querySelector('#gallery').content;

//создадим фрагмент
const picturesTemplateFragment=document.createDocumentFragment();


//функция вывода
const renderingPhotos=(arr)=>{

  //пройдемся по массиву forEach
  arr.forEach((elem)=>{

    //клонируем фрагмент
    const clonePicturesTemplate=picturesTemplate.cloneNode(true);
    //найдем тег img куда прокинем изображение
    clonePicturesTemplate.querySelector('.pictures__image').src=elem.url;
    //найдем тег span куда прокинем количество лайков
    clonePicturesTemplate.querySelector('.pictures__likes').textContent=elem.likes;
    //найдем тег span куда прокинем количество комментариев
    clonePicturesTemplate.querySelector('.pictures__comments').textContent=elem.comments.length;

    //прокинем в фрагмент
    picturesTemplateFragment.appendChild(clonePicturesTemplate);

  });
  //прокидываем фрагмент в секцию
  picturesWrapper.appendChild(picturesTemplateFragment);

}

renderingPhotos(photoDescriptionArr);

export {photoDescriptionArr,renderingPhotos};


