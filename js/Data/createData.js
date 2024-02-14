
import { getRandomArrayElement,getRandomPositiveInteger } from '../Utils/utils.js';
//функция формирующая массив обьектов описывающий пользователя оставившего комент
const getCommentsUser=(obj)=>{
    const {comments,names}=obj;
    const user=[];
    const countUser=getRandomPositiveInteger(1,19);
    for(let i=0;i<countUser;i++){
          user.push(
            {
                id:i+1,
                avatar:`img/avatar/avatar-${getRandomPositiveInteger(1,7)}.svg`,
                message:getRandomArrayElement(comments),
                name:getRandomArrayElement(names),
            });
    }
    return user;
}

//функция формирующая массив из 25 обьектов описывающий фотографию
export const getDescriptionPhoto=(obj)=>{
  const arrayDescription=[];
  const {description}=obj;
  for(let i=0;i<25;i++){
    arrayDescription.push({
        id:i+1,
        url:`photos/${i+1}.jpg`,
        description:getRandomArrayElement(description),
        likes:getRandomPositiveInteger(15,200),
        comments:getCommentsUser(obj),
    });
  }
  return arrayDescription;
}
