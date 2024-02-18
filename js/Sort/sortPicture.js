import { getBigPicture } from "../Big-picture/bigPicture.js";
import { renderingPhotos,photoDescriptionArr } from "../Pictures/pictures.js";
import { getRandomArray,getDiscussedArray } from "../Utils/utils.js";


//найдем секцию загрузки фотографий пользователей
const picturesWrapper=document.querySelector('.pictures-wrapper');

//функция сортировки
export const sortPicturesArray=(filter)=>{
  //создадим копию массива
  let photoArrCopy=photoDescriptionArr.slice();
  switch (filter){
    case 'filter-default':
      picturesWrapper.innerHTML='';
      renderingPhotos(photoDescriptionArr);
      getBigPicture(photoDescriptionArr);
      break;
    case 'filter-random':
      getRandomArray(photoArrCopy);
      picturesWrapper.innerHTML='';
      renderingPhotos(photoArrCopy);
      getBigPicture(photoArrCopy);
      break;
    case 'filter-discussed':
      getDiscussedArray(photoArrCopy);
      picturesWrapper.innerHTML='';
      renderingPhotos(photoArrCopy);
      getBigPicture(photoArrCopy);
      break;
  }
  return photoArrCopy;
}
