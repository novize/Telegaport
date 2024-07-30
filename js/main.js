import './full-size-image.js';
import './form-validation.js';
import './scale.js';
import './effects.js';
import { postsGenerator } from './posts.js';
import { generateThumbnails } from './thumbnails.js';

generateThumbnails(postsGenerator());
