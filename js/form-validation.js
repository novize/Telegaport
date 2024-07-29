const HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_MESSAGES = {
  INVALID_HASHTAG_COUNT: `Максимум ${HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE_HASHTAG: 'Хэштеги должны быть уникальными',
  INVALID_HASHTAG_PATTERN: 'Неправильный хэштег',
};

const body = document.body;
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const closeModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const normalizeTags = (tagString) =>
  tagString.trim().split(/\s+/).filter(Boolean);

const hasValidTags = (value) => {
  const tags = normalizeTags(value);
  return tags.every((tag) => VALID_SYMBOLS.test(tag));
};

const hasValidCount = (value) => {
  const tags = normalizeTags(value);
  return tags.length <= HASHTAG_COUNT;
};

const hasUniqueTags = (value) => {
  const tags = normalizeTags(value);
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const onFileInputChange = () => openModal();
const onCancelButtonClick = () => closeModal();
const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(
  hashtagField,
  hasValidCount,
  ERROR_MESSAGES.INVALID_HASHTAG_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagField,
  hasUniqueTags,
  ERROR_MESSAGES.NOT_UNIQUE_HASHTAG,
  2,
  true
);

pristine.addValidator(
  hashtagField,
  hasValidTags,
  ERROR_MESSAGES.INVALID_HASHTAG_PATTERN,
  1,
  true
);

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
