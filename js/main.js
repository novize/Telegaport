import './full-size-image.js';
import './form-validation.js';
import { postsGenerator } from './posts.js';
import { generateThumbnails } from './thumbnails.js';

generateThumbnails(postsGenerator());
