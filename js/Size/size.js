
//функция изменения размеров изо


//найдем форму
const uploadForm=document.querySelector('.upload-form');

//найдем поле-input размера изо
const zummerSizeInput=uploadForm.querySelector('.zummer__size-input');

//найдем загружаемое изо
const uploadPictureImage=uploadForm.querySelector('.upload-picture__image');
const STEP_RESIZE=25;
const MIN_PREVIEW_SIZE=25;
const MAX_PREVIEW_SIZE=100;



 export const changeSize =(evt)=>{
  //создадим текущще значение
  let currentValue=parseInt(zummerSizeInput.value,10);

  //выполним проверку
  if(evt.target.closest('.zummer__bigger')){
   (currentValue >= MAX_PREVIEW_SIZE) ? MAX_PREVIEW_SIZE : currentValue+=STEP_RESIZE;
  };

  if(evt.target.closest('.zummer__smaller')){
   (currentValue <= MIN_PREVIEW_SIZE) ? MIN_PREVIEW_SIZE : currentValue-=STEP_RESIZE;
  };

   zummerSizeInput.value=`${currentValue}%`;
   uploadPictureImage.style.transform=`scale(${currentValue/100})`;
}
