
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
//функция buttonHendler
export const buttonHendler=(evt)=>{
 const isValid=pristineLibrary.validate();
 if(isValid){
  console.log('yes');
 }else{
  evt.preventDefault();
  uploadForm.reset();
  console.log('no');
 };
}
