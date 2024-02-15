
import { createComments } from "../Comments/comments.js";
import { photoDescriptionArr } from "../Pictures/pictures.js";
const COMMENT_COUNT=5;



//найдем блок с изображениями загруженными пользователями
const picturesWrapper=document.querySelector('.pictures-wrapper');

//найдем  изображения загруженные пользователями
const picturesImages=picturesWrapper.children;


//найдем  блок вывода полноекранного изо
const bigPicture=document.querySelector('.big-picture');


    //найдем тогл подгрузки оставшихся комментариев
    const commentsLoader=bigPicture.querySelector('.social__comments-counts-loader');

//найдем тогл закрытия
const bigPictureClose=bigPicture.querySelector('.big-picture__close');

//функция открытия полноекранного изо
const openBigPicture=(evt)=>{
  const target=evt.target;
  if(target.closest('.pictures__image')){
    bigPicture.classList.remove('hidden');
    bigPictureClose.addEventListener('click',closeBigPicture);
    document.addEventListener('keydown',closeBigPicture);
  }
}
//функция закрытия полноекранного изо
const closeBigPicture=(evt)=>{
  if( evt.target.closest('.big-picture__close') || evt.key === 'Escape' ){
    bigPicture.classList.add('hidden');
    bigPictureClose.removeEventListener('click',closeBigPicture);
    document.removeEventListener('keydown',closeBigPicture);
    }
}

//вешаем обработчик событий на родителя (контейнер содержащий картинки)
picturesWrapper.addEventListener('click',openBigPicture);

//функция замыкания загружающая ту картинку по которой произойдет клик + настройки вывода количества комментариев и сами комментарии
const checkHundlerAdd=(pictures,users)=>{
  pictures.addEventListener('click',(evt)=>{

    //находим елемент куда загрузим изо
    const bigImage=bigPicture.querySelector('.big-picture__image');

    //найдем елемент куда загрузим описание фото
    const socialDescription=bigPicture.querySelector('.social__description');

    //найдем елемент куда загрузим количество лайков
    const socialСount=bigPicture.querySelector('.social__likes-count');


    //найдем тогл подгрузки оставшихся комментариев
    const commentsLoader=bigPicture.querySelector('.social__comments-counts-loader');

    //найдем елемент куда загрузим общее количество комментариев
    const socialAllComments=bigPicture.querySelector('.social__all-comments');

    //получим общее число комментариев из массива
    const commentsCountInt=users.comments.length;

    //найдем елемент с текущим количеством комментариев
    const currentCommentCount=bigPicture.querySelector('.social__comment-current');

    let currentCommentCountInt=COMMENT_COUNT;


    //ставим условие скрытия тогла оставшихся комментариев если текущее количество комментариев боьше общего
    if(currentCommentCountInt >= commentsCountInt){
      currentCommentCountInt=commentsCountInt;
      commentsLoader.classList.add('hidden');
    } else {
      currentCommentCountInt=COMMENT_COUNT;
      commentsLoader.classList.remove('hidden');
    }

     //делаем активное(выведенное количество комментариев) равное или 5 или тому числу (меньшему из массива)
     currentCommentCount.textContent=currentCommentCountInt;

     //вызов функции прокидывающей список комментариев
     createComments(users.comments,currentCommentCountInt);


    bigImage.src=users.url;
    socialDescription.textContent=users.description;
    socialСount.textContent=users.likes;
    socialAllComments.textContent=commentsCountInt;


    //функция подгрузки при клике
    const upLoadComments=()=>{
      //увеличиваем количество текущих комментариев на 5 и снова ставим условие где сравниваем
      currentCommentCountInt+=COMMENT_COUNT;
      if(currentCommentCountInt >= commentsCountInt){
        currentCommentCountInt=commentsCountInt;
        commentsLoader.classList.add('hidden');
        commentsLoader.removeEventListener('click',upLoadComments);
      }else{
        commentsLoader.classList.remove('hidden');
      }
      currentCommentCount.textContent=currentCommentCountInt;
      //вызов функции прокидывающей список комментариев
      createComments(users.comments,currentCommentCountInt);
    }
    //повесим обработчик по клику на тогла загрузки доп. изо
    commentsLoader.addEventListener('click',upLoadComments);
  });
}


//переберем массива изображений циклом(вызовем функцию замыкания)
for(let i=0;i<picturesImages.length;i++){
  checkHundlerAdd(picturesImages[i],photoDescriptionArr[i]);
}


