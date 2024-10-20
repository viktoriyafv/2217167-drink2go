/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.onclick = function () {
  navMain.classList.toggle('main-nav--opened');
};

const slider = document.querySelector('.slider__list');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('li'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

/*function createPaginations() {
  const itemsPerPage = 3;
  let currentPage = 0;
  const totalPages = Math.ceil(slides.length / itemsPerPage);
  const paginationContainer = document.createElement('ol');
  const paginationDiv = slider.appendChild(paginationContainer);
  paginationContainer.classList.add('slider__pagination');

  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.classList.add('slider-pagination__button');
    pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });

    slider.appendChild(paginationContainer);
    paginationDiv.appendChild(pageButton);
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.slider-pagination__button button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('slider-pagination__button--current');
      } else {
        button.classList.remove('slider-pagination__button--current');
      }
    });
  }

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    slides.forEach((item, index) => {
      item.classList.toggle('visiully-hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }
}

createPaginations();
*/
