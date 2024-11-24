import './scale.js';
import { getData } from './api.js';
import { renderPictures } from './gallery.js';
import { showAlert } from './util.js';

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
