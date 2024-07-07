import './data.js';

function idGenerator() {
  let idCount = 0;
  return function () {
    idCount += 1;
    return idCount;
  };
}
const createdIdPost = idGenerator();
const createdPhotoUrl = idGenerator();

const createComment = (createdIdComment) => ({
  id: createdIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(COMMENTATORS_NAMES),
});

const createPost = () => {
  const createdIdComment = idGenerator();
  return {
    id: createdIdPost(),
    url: `photos/${createdPhotoUrl()}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: Array.from({ length: getRandomInteger(1, COMMENTS_COUNT) }, () => createComment(createdIdComment)),
  };
};

Array.from({ length: POSTS }, createPost);
