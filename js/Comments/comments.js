
import { createComment } from "../Comment/comment.js";
//функция создания списка комментариев

const createComments=(array,count)=>{

  //найдем список в который будем загружать наши комментарии
  const  socialCommentsList=document.querySelector('.social__comments-list');

  //создадим фрагмент
  const fragment=document.createDocumentFragment();

  //очистим список от стандартных данных
  socialCommentsList.innerHTML='';

  //методом slice вырежем то количество обьектов которое нужно
  array.slice(0,count).forEach((item)=>{
  fragment.appendChild(createComment(item));
  });
  socialCommentsList.appendChild(fragment);
  return socialCommentsList;
}
 export {createComments};


