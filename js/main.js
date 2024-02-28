import './Sort/sort.js';
import './Upload/uploadFile.js';
import {closeUploadPicture} from './Upload/uploadFile.js'
import { renderingPhotos } from './Pictures/pictures.js';
import { setUserFormSubmit } from './Validation/validation.js';
import { getBigPicture } from './Big-picture/bigPicture.js';


fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
.then((responce)=>responce.json())
.then((descriptionArray)=>{
  renderingPhotos(descriptionArray);
  getBigPicture(descriptionArray);
})

setUserFormSubmit(closeUploadPicture);
