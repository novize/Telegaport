import './scale.js';
import './form-validation.js';
import { init } from './effects.js';
import { getData } from './api.js';
import { renderPictures } from './gallery.js';
import { showAlert } from './util.js';
import { initForm } from './form.js';

(() => {
  getData()
    .then((pictures) => {
      renderPictures(pictures);
    })
    .catch((err) => {
      showAlert(err.message);
    });

  initForm();
})();

init();
