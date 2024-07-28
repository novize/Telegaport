import { POSTS, MIN_LIKES_COUNT, MAX_LIKES_COUNT, COMMENTS_COUNT, DESCRIPTIONS } from './data.js';

import { getRandomInteger, createdIdPost, createdPhotoUrl, getRandomElement } from './util.js';

import { createComment } from './comments.js';

const createPost = () => ({
  id: createdIdPost(),
  url: `photos/${createdPhotoUrl()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: getRandomInteger(0, COMMENTS_COUNT) }, createComment),
});

const postsGenerator = () => Array.from({ length: POSTS }, createPost);

export { postsGenerator };
