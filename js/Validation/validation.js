import { showAlert } from "../Utils/utils.js";
//найдем форму
const uploadForm=document.querySelector('.upload-form');

//найдем поле инпут
const uploadPictureInput=uploadForm.querySelector('.upload-picture__input');

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


//функция setter вызываемая в точке входа
export const setUserFormSubmit=(onSuccess)=>{
  //вешаем обработчик событии на форму (по клику тогла отправки)
uploadForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValide=pristineLibrary.validate();
  if(isValide){
    const formData = new FormData(evt.target);
    for(let item of formData){
      console.log(item);
    }
    fetch('https://25.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
    .then((responce)=>{

      if(responce.ok){
        onSuccess();
      }else{
        throw new Error('Форма не валидна');
      }
    })
    .catch((err)=>{
      showAlert(err);
    });
    uploadPictureInput.value='';
    console.log('Форма  валидна!');
  }else{
    console.log('Форма не валидна!');
    uploadPictureInput.value='';
  }
});
}

