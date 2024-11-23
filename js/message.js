// message.js

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showMessage = (element, buttonClass) => {
  document.body.append(element);

  const onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      element.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  element.querySelector(buttonClass).addEventListener('click', () => {
    element.remove();
    document.removeEventListener('keydown', onEscKeydown);
  });

  document.addEventListener('keydown', onEscKeydown);

  element.addEventListener('click', (evt) => {
    if (evt.target === element) {
      element.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  });
};

const showSuccessMessage = () => {
  showMessage(successTemplate.cloneNode(true), '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorTemplate.cloneNode(true), '.error__button');
};

export {showSuccessMessage, showErrorMessage};
