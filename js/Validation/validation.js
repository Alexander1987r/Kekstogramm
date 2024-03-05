import { sendData } from "../API/api.js";

//найдем форму
const uploadForm=document.querySelector('.upload-form');
//найдем поле инпут
const uploadPictureInput=uploadForm.querySelector('.upload-picture__input');
const uploadPictureSubmit=uploadForm.querySelector('.upload-picture__submit');

//подключаем библиотеку Pristine
const pristineLibrary=new Pristine(uploadForm,{
  classTo:'hash',
  errorTextParent:'hash',
  errorTextClass:'hash-error'
});

const re=/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
//функция проверки поля при помощи регулярного выражения вызываемая в библиотеке Pristine
const hashTagValidator=(value)=>{
 //массив из значения вводимого в поле
 const valueInput=value.split(' ');
 return valueInput.every((value)=>{
  const regItem=re.test(value);
  return regItem;
 });
}

pristineLibrary.addValidator(uploadPictureInput,hashTagValidator,'Форма не валидна');

//функция блокировки кнопки отправки
const blockSubmitButton=()=>{
  uploadPictureSubmit.disabled=true;
  uploadPictureSubmit.textContent='Отправляю...'
 }

 //функция разблокировки кнопки отправки
 const unblockSubmitButton=()=>{
  uploadPictureSubmit.disabled=false;
  uploadPictureSubmit.textContent='Опубликовать'
 }

//функция setter вызываемая в точке входа
export const setUserFormSubmit=(onSuccess,onError)=>{
  //вешаем обработчик событии на форму (по клику тогла отправки)
uploadForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValide=pristineLibrary.validate();
  if(isValide){
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(onSuccess,onError,formData);
    unblockSubmitButton();
    uploadForm.reset();
     }else{
    uploadPictureInput.value='';
   }
});
}

