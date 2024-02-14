import { loadImageUser } from "../Preview/preview.js";
import { changeSize } from "../Size/size.js";
import { getNoUiSlider } from "../noUiSlider/slider.js";
import { inputHendler } from "../Validation/validation.js";
import { buttonHendler } from "../Validation/validation.js";
//загрузка выбираемого фото пользователя

//найдем форму
const uploadForm=document.querySelector('.upload-form');


//найдем загружаемое изо
const uploadPictureImage=uploadForm.querySelector('.upload-picture__image');

//скрытое поле отрисовки и наложения фильтров нового изображения
const uploadPicture=uploadForm.querySelector('.upload-picture');

//найдем тогл закрытия блока загрузки нового изо
const uploadPictureClose=uploadForm.querySelector('.upload-picture__close');

//найдем inpyt типа фаил
const uploadFormInput=uploadForm.querySelector('.upload-form__input');

//найдем контейнер-блок тоглов изменения размера изо.
const uploadPictureZummer=uploadForm.querySelector('.upload-picture__zummer');


//найдем поле куда прокинем слайдер
const fieldSlider=uploadForm.querySelector('.field-slider');


//установка начальных настроек
noUiSlider.create(fieldSlider,{
  range:{
      min:0,
      max:100,
  },
  start:100,
  step:1,
  connect:'lower',
});
fieldSlider.style.display='none';




//функция открытия блока настроек и загрузки нового фото
const openUploadPicture=(evt)=>{
  //открытие блока наложения фильтра
  uploadPicture.classList.remove('hidden');
  uploadPictureClose.addEventListener('click',closeUploadPicture);

  //вызовем функцию создания обьекта FileReader
  loadImageUser(evt);

  //ставим прослушиватель на блок содержащий тоглы изменения размеров
  uploadPictureZummer.addEventListener('click',changeSize);

  //вызов функции изменения настроек и зависимостей noUiSlider
  getNoUiSlider(evt);

  //валидация формы
  //вешаем обработчик событии на ввод на форму
  uploadForm.addEventListener('input',inputHendler);
  //вешаем обработчик событии на форму (по клику тогла отправки)
  uploadForm.addEventListener('click',buttonHendler);
}

//функция закрытия блока нового фото
const closeUploadPicture=()=>{
 uploadPicture.classList.add('hidden');
 uploadPictureClose.removeEventListener('click',closeUploadPicture);
 uploadPictureZummer.removeEventListener('click',changeSize);
 uploadForm.removeEventListener('input',inputHendler);
 uploadForm.removeEventListener('click',buttonHendler);
 fieldSlider.style.display='none';
 uploadPictureImage.style.filter='';
}
//вешаем обработчик событи на форму(применяя делегирование ловим обработчик изменения на файле type)
uploadForm.addEventListener('change',openUploadPicture);


