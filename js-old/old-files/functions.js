
function strLength(phrase, charCount) {
  const result = phrase.length;
  if (result <= charCount) {
    return true;
  } else {
    return false;
  }
}

strLength('объявить параметры', 10);

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
  return +output;
}

numberExtractor('ECMAScript 2022');

const stringConverter = (stringToInt) => {
  stringToInt = stringToInt.split(':');
  stringToInt = (parseInt(stringToInt[0], 10) * 60 + parseInt(stringToInt[1], 10));
  return stringToInt;
};

const isLegalTime = (startWorkingDay, endWorkingDay, startMeet, durationMeet) => {
  startWorkingDay = stringConverter(startWorkingDay);
  endWorkingDay = stringConverter(endWorkingDay);
  startMeet = stringConverter(startMeet);
  if ((endWorkingDay - startWorkingDay) >= durationMeet && (endWorkingDay - startMeet) >= durationMeet) {
    return true;
  }
  return false;
};

isLegalTime('08:00', '17:30', '14:00', 90);
