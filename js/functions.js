//Подсчитать дину строки
function strLength(phrase, charCount) {
  const result = phrase.length;
  if (result <= charCount) {
    return true;
  } else {
    return false;
  }
}

strLength('объявить параметры', 10);

// Строка является палиндромом

function isPalindrom(phrase) {
  const source = phrase.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = source.length - 1; i >= 0; i--) {
    result += source[i];
  }
  if (source === result) {
    return true;
  } else {
    return false;
  }
}

isPalindrom('Лёша на полке клопа нашёл ');

// Извлечение целого числа


function numberExtractor(param) {
  const source = param.toString();
  let output = '';
  for (let i = 0; i <= source.length; i++) {
    if (!Number.isNaN(parseInt(source[i], 10))) {
      output += source[i];
    }
  }
  if (output === '') {
    return NaN;
  }
  return output;
}

numberExtractor('ECMAScript 2022');
