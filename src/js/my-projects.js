const projects = [
  {
    original: '/img/my-projects/wallet_webservice.jpg',
    originZoom: '/img/my-projects/wallet_webservice_x2.jpg 2x',
    description: 'Wallet webservice',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Wallet webservice',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/green_harvest.jpg',
    originZoom: '/img/my-projects/green_harvest_x2.jpg 2x',
    description: 'Green harvest webservice',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Green harvest webservice',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/english_excellence.jpg',
    originZoom: '/img/my-projects/english_excellence_x2.jpg 2x',
    description: 'English Exellence website',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'English Exellence website',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/power_pulse.jpg',
    originZoom: '/img/my-projects/power_pulse_x2.jpg 2x',
    description: 'Power pulse webservice',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Power pulse webservice',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/mimino.jpg',
    originZoom: '/img/my-projects/mimino_x2.jpg 2x',
    description: 'Mimino website',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Mimino website',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/vyshyvanka.jpg',
    originZoom: '/img/my-projects/vyshyvanka_x2.jpg 2x',
    description: 'Vyshyvanka vibes Landing Page',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Vyshyvanka vibes Landing Page',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/chego_jewelry.jpg',
    originZoom: '/img/my-projects/chego_jewelry_x2.jpg 2x',
    description: 'Chego jewelry website',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Chego jewelry website',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/energy_flow.jpg',
    originZoom: '/img/my-projects/energy_flow_x2.jpg 2x',
    description: 'Energy flow webservice ',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Energy flow webservice ',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/fruitbox.jpg',
    originZoom: '/img/my-projects/fruitbox_x2.jpg 2x',
    description: 'Fruitbox online store',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Fruitbox online store',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
  {
    original: '/img/my-projects/starlight_studio.jpg',
    originZoom: '/img/my-projects/starlight_studio_x2.jpg 2x',
    description: 'Starlight studio landing page',
    technologis: 'React, JavaScript, Node JS, Git',
    nameOfProject: 'Starlight studio landing page',
    link: 'https://github.com/HenryLytvyn/bitemates-project-js',
  },
];
const loadMoreBtn = document.querySelector('.btn_load_more');
const listEl = document.querySelector('.list');
let currentIndex = 0;
const ITEMS_PER_PAGE = 3;

const createMarkup = arr =>
  arr
    .map(
      item => ` <li class="item_list">
        <img
          class="item_img"
          alt="${item.description}"
          src="${item.original}"
          srcset="${item.originZoom}"
        />
        <p class="item_text">${item.technologis}</p>
        <div class="div_tablet_desktop_vision">
          <h3 class="item_h3">${item.nameOfProject}</h3>
          <button class="btn_visit tablet_desktop_vision" type="button" data-link="${item.link}">
            VISIT<svg width="18" height="18" class="item_svg">
              <use href="/img/svg/sprite.svg#arrow-visit-btn"></use>
            </svg>
          </button>
        </div>
        <div class="item_div_link mobile-only">
          <button class="btn_visit" type="button" data-link="${item.link}">
            VISIT<svg width="18" height="18" class="item_svg">
              <use href="/img/svg/sprite.svg#arrow-visit-btn"></use>
            </svg>
          </button>
        </div>
      </li>
`
    )
    .join('');

function renderProjects() {
  const nextProjects = projects.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );
  listEl.insertAdjacentHTML('beforeend', createMarkup(nextProjects));
  currentIndex += ITEMS_PER_PAGE;

  if (currentIndex >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

renderProjects();

loadMoreBtn.addEventListener('click', renderProjects);

listEl.addEventListener('click', event => {
  const button = event.target.closest('.btn_visit');

  if (button) {
    const link = button.dataset.link;
    if (link) {
      window.open(link, '_blank');
    }
  }
});
