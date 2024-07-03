const posts = 25;
const minLikesCount = 15;
const maxLikesCount = 200;
const commentsCount = 30;
const avatarsCount = 6;

// Массив с описаниями фотографий
const DESCRIPTIONS = [
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

// Массив с именами комментаторов
const COMMENTATORS_NAMES = [
  'Алексей', 'Мария', 'Игорь', 'Екатерина', 'Дмитрий', 'Анна', 'Владимир', 'Ольга', 'Иван', 'Юлия', 'Николай', 'Светлана', 'Сергей', 'Наталья', 'Андрей', 'Елена', 'Александр', 'Татьяна', 'Михаил', 'Алёна', 'Виктор', 'Ирина', 'Павел', 'Евгения', 'Роман', 'Людмила', 'Константин', 'Вероника', 'Максим', 'Алиса'
];

//Массив с комментариями
const MESSAGES = [
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

function idGenerator() {
  let idCount = 0;
  return () => idCount = ++idCount;
};

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createdIdPost = idGenerator();
const createdPhotoUrl = idGenerator();

const createComment = (createdIdComment) => ({
  id: createdIdComment(),
  avatar: `img/avatar-${getRandomInt(1, avatarsCount)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(COMMENTATORS_NAMES),
});

const createPost = () => {
  const createdIdComment = idGenerator();
  return {
    id: createdIdPost(),
    url: `photos/${createdPhotoUrl()}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInt(minLikesCount, maxLikesCount),
    comments: Array.from({ length: getRandomInt(1, commentsCount) }, () => createComment(createdIdComment)),
  };
};

console.log(Array.from({ length: posts }, createPost));
