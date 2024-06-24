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
  for(let i = source.length - 1; i >= 0; i--) {
    result += source[i];
  }
  if(source === result) {
    return true;
  } else {
    return false;
  }
}

isPalindrom('Лёша на полке клопа нашёл ');

// Извлечение целого числа


function numberExtractor(param) {
  let source = param.toString();
  console.log(source);
  let output = "";
  console.log(output);

  for (let i = 0; i < source.length; i++) {
    output += parseInt((source[i]), 10);
    console.log(output);
  }
}

console.log(numberExtractor('2023'));
