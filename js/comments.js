import { AVATARS_COUNT, COMMENTATORS_NAMES, MESSAGES } from './data.js';

import { getRandomElement, getRandomInteger, createdIdComment } from './util.js';

const createComment = () => ({
  id: createdIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomElement(MESSAGES)).join(' '),
  name: getRandomElement(COMMENTATORS_NAMES)
});

export { createComment };
