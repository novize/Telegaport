//Подсчитать дину строки
function strLength(phrase, charCount) {
  const result = phrase.length;
  if (result <= charCount) {
    let isTrue = `Длина фразы достаточна ${result}`;
    return isTrue;
  } else {
    let isFalse = `Слишком много знаков ${result}`;
    return isFalse;
  }
}

strLength('объявить параметры', 20);

// Строка является палиндромом

function isPalindrom(phrase) {
  const source = phrase.replaceAll(' ', '').toLowerCase();
  let result = '';
  for(let i = source.length - 1; i >= 0; i--) {
    result += source[i];
  }
  if(source === result) {
    let isTrue = `Фраза "${result}" палиндром`;
    return isTrue;
  } else {
    let isFalse = `Фраза "${result}" не палиндром`;
    return isFalse;
  }
}

isPalindrom('Лёша на полке клопа нашёл ');

// Извлечение целого числа
