import { showAlert } from '../Utils/utils.js';
import { getBigPicture } from '../Big-picture/bigPicture.js';
import { renderingPhotos } from '../Pictures/pictures.js';

//функция отображения галлереи с сервера либо с запасными данными
export const getData=(arr)=>{
fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
.then((responce)=>{
  if(responce.ok){
    return responce.json();
  } else {
    renderingPhotos(arr);
    getBigPicture(arr);
    throw new Error('Сервер не доступен.Идет загрузка демо-версии');
  }
})
.then((responce)=>{
  renderingPhotos(responce);
  getBigPicture(responce);
})
.catch((err)=>showAlert(err.message))
}

//функция отправки данных на сервер
export const sendData=(onSuccess,onError,body)=>{
  fetch('https://25.javascript.htmlacademy.pro/kekstagra',
      {
        method: 'POST',
        body: body,
      },
    )
    .then((responce)=>{
      if(responce.ok){
        onSuccess();
      }else{
        onError();
        throw new Error('Сервер не доступен');
      }
    })
    .catch((err)=>{
      showAlert(err);
    });
}
