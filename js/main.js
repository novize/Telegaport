<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 23c812cd5c40f58c8e008b3dcb70b88230e4ea5d
// Функция по заполнению массивов
function arrayFiller (source, array, count) {
  for (let i = count; i <= source; i++) {
    array.push(i);
  }
}

const PHOTOS_ITEMS = 25;

// Создание массива PHOTO_ITEM_ID по количеству постов
const PHOTO_ITEM_ID = [];
arrayFiller(PHOTOS_ITEMS, PHOTO_ITEM_ID, 1);

// Копия массива PHOTO_ITEM_ID для генерации уникальных ID
const uniqPhotoItemIds = PHOTO_ITEM_ID.slice();

// Создание массива PHOTO_URL, соответствует по количеству PHOTOS_ITEMS
const PHOTO_URL = [];
arrayFiller(PHOTOS_ITEMS, PHOTO_URL, 1);

// Копия массива PHOTO_URL для генерации уникальных URL
const uniqUrls = PHOTO_URL.slice();

// Массив с описаниями фотографий
const DESCRIPTION = [
  'Красная роза в утренних каплях росы',
  'Нежный белый тюльпан на фоне зелёной лужайки',
  'Фиолетовый ирис в солнечном свете полудня',
  'Жёлтая хризантема среди осенних листьев',
  'Пышные розовые пионы в саду',
  'Оранжевая лилия на фоне заката',
  'Голубой василёк посреди поля',
  'Белая камелия на ветке',
  'Романтичный букет сирени',
  'Золотистые нарциссы под ясным небом',
  'Сиреневые крокусы в весеннем парке',
  'Цветущие магнолии в лучах рассвета',
  'Малиновый гвоздик в зелёной траве',
  'Кувшинка на тихой воде',
  'Фуксийнные азалии в красивом саду',
  'Лавандовое поле под голубым небом',
  'Полевой мак на ветреном поле',
  'Розовые орхидеи в прозрачной вазе',
  'Белоснежный жасмин на дереве',
  'Фрезии разных оттенков в саду',
  'Фиолетовый лотос на пруду',
  'Живописные георгины на клумбе',
  'Бордовые астры на фоне забора',
  'Солнечные подсолнухи в августе',
  'Нежные анемоны в букете',
];

// Создание массива с количеством лайков
const MAX_LIKES_COUNT = 200;
const LIKES = [];
arrayFiller(MAX_LIKES_COUNT, LIKES, 15);

const COMMENTS_COUNT = 30;
const MAX_COMMENT_COUNT = 150;

// Создание массива COMMENT_ID по возможному количеству комментариев
const COMMENT_ID = [];
arrayFiller(MAX_COMMENT_COUNT, COMMENT_ID, 1);

// Копия массива COMMENT_ID для генерации уникальных ID
const availableCommentIds = COMMENT_ID.slice();

// Создание массива с количеством аватаров
const MAX_AVATARS_COUNT = 6;
const AVATAR_ID = [];
arrayFiller(MAX_AVATARS_COUNT, AVATAR_ID, 1);

// Массив с именами комментаторов
const COMMENTATORS_NAMES = [
  'Алексей', 'Мария', 'Игорь', 'Екатерина', 'Дмитрий', 'Анна', 'Владимир', 'Ольга', 'Иван', 'Юлия', 'Николай', 'Светлана', 'Сергей', 'Наталья', 'Андрей', 'Елена', 'Александр', 'Татьяна', 'Михаил', 'Алёна', 'Виктор', 'Ирина', 'Павел', 'Евгения', 'Роман', 'Людмила', 'Константин', 'Вероника', 'Максим', 'Алиса'
];

//Массив с комментариями
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getUniqueElement = (elements) => {
  const [element] = elements.splice(getRandomInt(0, elements.length - 1), 1);
  return element;
};

const createComment = () => ({
  id: getUniqueElement(availableCommentIds),
  avatar: `img/avatar-${getRandomElement(AVATAR_ID)}.svg`,
  message: getRandomElement(MESSAGE),
  name: getRandomElement(COMMENTATORS_NAMES),
});

const COMMENT = Array.from({length: COMMENTS_COUNT}, createComment);

<<<<<<< HEAD
const generateComments = () => {
  const numComments = getRandomInt(0, 30); // генерируем случайное количество комментариев от 0 до 30
  const commentsArray = [];
  for (let i = 1; i <= numComments; i++) {
    commentsArray.push(createComment());
  }
  return commentsArray;
}

=======
>>>>>>> 23c812cd5c40f58c8e008b3dcb70b88230e4ea5d
const createPhotoItem = () => ({
  id: getUniqueElement(uniqPhotoItemIds),
  url: `photos/${getUniqueElement(uniqUrls)}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomElement(LIKES),
<<<<<<< HEAD
  comments: generateComments(),
});

console.log(Array.from({length: PHOTOS_ITEMS}, createPhotoItem));

//console.log(COMMENT);
>>>>>>> Stashed changes
=======
  comments: getRandomElement(COMMENT),
});

console.log(Array.from({length: PHOTOS_ITEMS}, createPhotoItem));
>>>>>>> 23c812cd5c40f58c8e008b3dcb70b88230e4ea5d
