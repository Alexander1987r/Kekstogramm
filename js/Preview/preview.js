//массив для проверки
const FILE_TYPES=['png','jpeg','jpg','gif'];

//найдем блок куда будем подгружать изображение
const uploadPictureImage=document.querySelector('.upload-picture__image');

//функция создание обьекта FileReader
export const loadImageUser=(evt)=>{
  if(evt.target.closest('.upload-form__input')){
    let files=evt.target.files;
    let file=files[0];
    const fileName=evt.target.files[0].name.toLowerCase();
    //методом some пройдемся по массиву и выполним проверку
    const matches=FILE_TYPES.some((item)=>{
      return fileName.endsWith(item);
    });
    if(matches){
      uploadPictureImage.src=URL.createObjectURL(file);
    }
  }

};
