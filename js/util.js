const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const idGenerator = () => {
  let idCount = 0;
  return () => {
    idCount += 1;
    return idCount;
  };
};

const createdIdPost = idGenerator();
const createdPhotoUrl = idGenerator();
const createdIdComment = idGenerator();

export { idGenerator, createdIdPost, createdPhotoUrl, createdIdComment, getRandomInteger, getRandomElement };

