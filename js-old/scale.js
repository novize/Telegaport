const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

const modalElement = document.querySelector('.img-upload');
const smallerButton = modalElement.querySelector('.scale__control--smaller');
const biggerButton = modalElement.querySelector('.scale__control--bigger');
const scaleInput = modalElement.querySelector('.scale__control--value');
const image = modalElement.querySelector('.img-upload__preview img');

const updateScale = (value) => {
  const clampedValue = clamp(value, MIN_SCALE, MAX_SCALE);
  image.style.transform = `scale(${clampedValue / 100})`;
  scaleInput.value = `${clampedValue}%`;
};

const changeScale = (step) => {
  const currentValue = parseInt(scaleInput.value, 10);
  updateScale(currentValue + step);
};

smallerButton.addEventListener('click', () => changeScale(-SCALE_STEP));
biggerButton.addEventListener('click', () => changeScale(SCALE_STEP));

updateScale(DEFAULT_SCALE);

export { updateScale };
