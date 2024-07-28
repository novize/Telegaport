const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const commentsList = bigPictureElement.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const shownCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const totalCommentsCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const captionElement = bigPictureElement.querySelector('.social__caption');

const COMMENTS_PAGE_SIZE = 5;
let commentsShown = 0;
let commentsData = [];

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    fragment.appendChild(commentElement);
  });

  commentsList.appendChild(fragment);
};

const renderCommentsPart = () => {
  const currentComments = commentsData.slice(commentsShown, commentsShown + COMMENTS_PAGE_SIZE);
  renderComments(currentComments);

  commentsShown += currentComments.length;
  shownCountElement.textContent = commentsShown;
  commentsLoader.classList.toggle('hidden', commentsShown >= commentsData.length);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onCommentsLoaderClick = (evt) => {
  evt.preventDefault();
  renderCommentsPart();
};

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openBigPicture = ({ url, likes, comments, description }) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  likesCountElement.textContent = likes;
  totalCommentsCountElement.textContent = comments.length;
  captionElement.textContent = description;

  commentsData = comments;
  commentsShown = 0;

  commentsList.innerHTML = '';
  renderCommentsPart();
  commentCountElement.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', closeBigPicture);

const addThumbnailClickListener = (thumbnail, picture) => {
  thumbnail.addEventListener('click', () => openBigPicture(picture));
};

export { addThumbnailClickListener };
