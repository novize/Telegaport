import './full-size-image.js';
import { postsGenerator } from './posts.js';
import { generateThumbnails } from './thumbnails.js';

const posts = postsGenerator();
generateThumbnails(posts);
