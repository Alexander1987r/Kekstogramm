import './Sort/sort.js';
import './Upload/uploadFile.js';
import { setUserFormSubmit } from './Validation/validation.js';
import { getData} from './API/api.js';
import { photoDescriptionArr} from './Pictures/pictures.js';
import { onUploadSuccess,onUploadError } from './Utils/utils.js';

//вызов функции отрисовки галлереи
getData(photoDescriptionArr);


setUserFormSubmit(onUploadSuccess,onUploadError);
