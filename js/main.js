import './Sort/sort.js';
import './Upload/uploadFile.js';
import {closeUploadPicture} from './Upload/uploadFile.js'
import { renderingPhotos,photoDescriptionArr} from './Pictures/pictures.js';
import { setUserFormSubmit } from './Validation/validation.js';
import { getBigPicture } from './Big-picture/bigPicture.js';
import { showAlert } from './Utils/utils.js';


fetch('https://25.javascript.htmlacademy.pro/kekstagram/dat')
.then((responce)=>{
  if(responce.ok){
    return responce.json();
  } else {
    renderingPhotos(photoDescriptionArr);
    getBigPicture(photoDescriptionArr);
    throw new Error('Сервер не доступен.Идет загрузка демо-версии');
  }
})
.then((responce)=>{
  renderingPhotos(responce);
  getBigPicture(responce);
})
.catch((err)=>showAlert(err.message))

setUserFormSubmit(closeUploadPicture);
