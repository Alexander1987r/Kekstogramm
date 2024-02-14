
//найдем форму
const uploadForm=document.querySelector('.upload-form');

//функция вызываемая при вводе в текстовое поле
export const inputHendler=(evt)=>{
  const target=evt.target;
  //проверим на валидацию только поле ввода input(без textarea)
  if(target.dataset.reg){
   //вызовем функцию
   inputCheck(target);
  }
             }

//функция преобразования значения в регулярное выражение и выполнение проверки
const inputCheck=(input)=>{

  //находим значение value у inputa
 const inputValue=input.value;

 //найдем значение дата-атрибута поля input
 const inputReg=input.dataset.reg;

 //преобразуем найденнное значение дата-атрибута в регулярное выражение
 const reg=RegExp(inputReg);

 //выполним проверку(если введенный текст содержится в регулярном выражении то)
 if(reg.test(inputValue)){
   input.setAttribute('is-valid','1'); //добавим атрибут is-valid = 1
   input.style.border='3px solid transparent';
 }else{
  input.setAttribute('is-valid','0'); //добавим атрибут is-valid = 0
  input.style.border='3px solid red';

  //при невалидной форме активизируем библиотеку Pristine
  const pristineLibrary=new Pristine(uploadForm,{
    classTo:'hash',
    errorTextParent:'hash',
    errorTextClass:'hash-error',
  });
  const isValidPristine=pristineLibrary.validate();
 }
}

//функция buttonHendler
export const buttonHendler=(evt)=>{
  const target=evt.target;
  if(target.closest('.upload-picture__submit')){
    //создадим пустой массив в который занесем елементы
    const isAllValid=[];

    //cформируем массив из елементов формы имеющих дата-атрибут reg
    const inputArray=Array.from(uploadForm);
    const inputDataReg=[];
    inputArray.forEach((el)=>{
      if(el.dataset.reg){
        inputDataReg.push(el);
      }
    });

    //полученный массив с нужным полем input(полями) переберем через forEach и получим значения атрибута is-valid(т.е. 0 или 1) которое занесем в окончательны й массив
    inputDataReg.forEach((elem)=>{
     isAllValid.push(elem.getAttribute('is-valid'));
    });

    const isValid=isAllValid.reduce((acc,value)=>{
      return acc && value;
    });
     console.log(typeof isValid);
     if(!Boolean(Number(isValid))){
      evt.preventDefault();
      uploadForm.reset();
     }
  }

}
