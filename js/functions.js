//Подсчитать дину строки

function strLenth (phrase, charCount) {
let result =  phrase.length;
  if (result <= charCount) {
    console.log(`Длина фразы достаточна ${result}`);
      } else {
        console.log(`Слишком много знаков ${result}`);
      }
};

strLenth('объявить параметры', 20);
