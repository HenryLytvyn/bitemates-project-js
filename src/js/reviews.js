import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


const REVIEWS_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list-js');
const placeholder = document.querySelector('.reviews-placeholder-js');
const prevBtn = document.querySelector('.prev-btn-js');
const nextBtn = document.querySelector('.next-btn-js');

async function fetchReviews() {
  try {
    const { data } = await axios.get(REVIEWS_URL);

    if (!data.length) {
      placeholder.classList.remove('visually-hidden');
      return;
    }

    const markup = data
      .map(
        ({ avatar_url, author, review }) => `
        <li class="swiper-slide review-item">
          <div class="review-text-wrap">
            <p class="review-text">${review}
            <button class="review-read-more-btn visually-hidden">read more</button>
            </p> 
          </div>
          <div class="review-author-info">
              <img class="review-author-img" src="${avatar_url}" width="40" heigh="40" alt="${author}" />
              <p class="reviewer-name">${author}</p>
          </div>
        </li>`
      )
      .join('');
    reviewsList.innerHTML = markup;

    initSwiper();

  } catch (error) {
    iziToast.error({
      message: 'Not found',
      position: 'topRight',  
    });
    placeholder.classList.remove('visually-hidden');
  }
}

fetchReviews();

function initSwiper() {
  const swiper = new Swiper('.reviews-slider-js', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    navigation: {
      prevEl: '.prev-btn-js',
      nextEl: '.next-btn-js',
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
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


