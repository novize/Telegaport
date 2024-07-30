import './full-size-image.js';
import './form-validation.js';
import './scale.js';
import { postsGenerator } from './posts.js';
import { generateThumbnails } from './thumbnails.js';
import { init } from './effects.js';

generateThumbnails(postsGenerator());
init();
