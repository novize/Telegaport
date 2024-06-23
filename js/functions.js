//Подсчитать дину строки
function strLenth(phrase, charCount) {
  const result = phrase.length;
  if (result <= charCount) {
    console.log(`Длина фразы достаточна ${result}`);
  } else {
    console.log(`Слишком много знаков ${result}`);
  }
}

strLenth('объявить параметры', 20);

// Строка является палиндромом

function isPalindrom(phrase) {
  const source = phrase.replaceAll(' ', '').toLowerCase();
  let result = '';
  for(let i = source.length - 1; i >= 0; i--) {
    result += source[i];
  }
  if(source === result) {
    console.log(`Фраза "${result}" палиндром`);
  } else {
    console.log(`Фраза "${result}" не палиндром`);
  }
}

isPalindrom('Лёша на полке клопа нашёл ');

// Извлечение целого числа
