

//найдем форму
const uploadForm=document.querySelector('.upload-form');
//найдем поле куда прокинем слайдер
const fieldSlider=uploadForm.querySelector('.field-slider');

//найдем загружаемое изо
const uploadPictureImage=uploadForm.querySelector('.upload-picture__image');
//массив обьектов с настройками для каждого фона
const FILTER=[
  {name:'chrome',
   min:0,
   max:1,
   step:0.1,
   style:'grayscale',
   unit:'',
   start:1,
  },
  { name:'sepia',
    min:0,
    max:1,
    step:0.1,
    style:'sepia',
    unit:'',
    start:1,
  },
  {name:'marvin',
    min:0,
    max:100,
    step:1,
    style:'invert',
    unit:'%',
    start:100,
  },
  {name:'phobos',
    min:0,
    max:3,
    step:0.1,
    style:'blur',
    unit:'px',
    start:3,
  },
  {name:'heat',
    min:1,
    max:3,
    step:0.1,
    style:'brightness',
    unit:'',
    start:3,
  },
];

export const getNoUiSlider=(evt)=>{
  if(evt.target.closest('.filter__input')){
    const change=evt.target.value;
   if(change !== 'origin'){

    fieldSlider.style.display='block';
    const selectedEffect=FILTER.find( (effect) => effect.name === change);
    // переустановка настроек
    fieldSlider.noUiSlider.updateOptions({
      range:{
        min:selectedEffect.min,
        max:selectedEffect.max,
      },
      start:selectedEffect.start,
      step:selectedEffect.step,
    });
    //установка зависимости
    fieldSlider.noUiSlider.on('update',(values)=>{
      uploadPictureImage.style.filter=`${selectedEffect.style}(${values}${selectedEffect.unit})`;
    });
   }else {
    fieldSlider.style.display='none';
    uploadPictureImage.style.filter='';
   }
  }
}
