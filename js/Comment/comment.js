// блок создания отдельного комментария

const createComment=(obj)=>{

  //создаем елемент li
  const comment=document.createElement('li');

  //создаем елемент img(avatar)
  const avatar=document.createElement('img');

  //создаем блок с коммментарием
  const commentText=document.createElement('p');

  //добавляем классы всем созданным тегам
  comment.classList.add('list__item');
  avatar.classList.add('list__image');
  commentText.classList.add('list__comment');

  //прокидывааем картинку(аватар),alt,width,height, прокидываем текст
   avatar.src=obj.avatar;
   avatar.alt=obj.name;
   avatar.width=35;
   avatar.height=35;

   commentText.textContent=obj.message;
   comment.append(avatar);
   comment.append(commentText);

   return comment;
}

export {createComment};


