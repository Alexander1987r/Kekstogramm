

//найдем блок куда будем подгружать изображение
const uploadPictureImage=document.querySelector('.upload-picture__image');

//функция создание обьекта FileReader
export const loadImageUser=(evt)=>{
  if(evt.target.closest('.upload-form__input')){
    let files=evt.target.files;
    let file=files[0];
    //создаем ридер
    let reader=new FileReader();
    reader.onload=function(){
        uploadPictureImage.src=reader.result;
    }
    reader.readAsDataURL(file);
  }
};
