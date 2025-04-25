import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewsList = document.querySelector('.reviews-list-js');
const placeholder = document.querySelector('.reviews-placeholder-js');
const prevBtn = document.querySelector('.prev-btn-js');
const nextBtn = document.querySelector('.next-btn-js');

const URL = 'https://portfolio-js.b.goit.study/api/reviews';

fetch(URL)
  .then(res => {
    if (!res.ok) throw new Error('Failed to load reviews');
    return res.json();
  })
  .then(data => {
    if (!data.length) {
      placeholder.classList.remove('visually-hidden');
      return;
    }

    const markup = data
      .map(
        ({ avatar_url, author, review }) => `
        <li class="swiper-slide review-item">
          <p class="review-text">${review}</p>
          <div class="author-info">
          <img class="author-img" src=${avatar_url} alt="${author}"
          <p style="bold" class="reviewer-name">${author}</p>
          </div>
        </li>`
      )
      .join('');
    reviewsList.innerHTML = markup;

    initSwiper();
  })
  .catch(() => {
    iziToast.error({
      message: 'Failed to load reviews',
      position: 'topRight',
    });
    placeholder.classList.remove('visually-hidden');
  });

function initSwiper() {
  const swiper = new Swiper('.reviews-slider-js', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    autoHeight: true,
    navigation: {
      prevEl: '.prev-btn-js',
      nextEl: '.next-btn-js',
    },
    keyboard: {
      enabled: true,
    },
    on: {
      reachBeginning() {
        prevBtn.disabled = true;
      },
      fromEdge() {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      },
      reachEnd() {
        nextBtn.disabled = true;
      },
    },
  });
}