import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqItems = [
  {
    info: 'What programming language are most often used in your project?',
    more: 'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    info: 'What are the deadlines for the project?',
    more: 'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    info: 'What payment methods do you accept?',
    more: 'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
  {
    info: 'How can I contact you?',
    more: 'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    info: 'Do you provide advice or support?',
    more: 'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    info: 'What does the process of developing a software product look like from idea to implementation?',
    more: 'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

const ACCORDION_CONFIG = {
  duration: 300,
  showMultiple: false,
  openOnInit: [0],
};

const createFaqItemHTML = (item, index) => `

  <li class="ac">
    <h2 class="ac-header">
      <button
        class="ac-trigger"
        type="button"
        id="trigger-${index}"
        aria-controls="panel-${index}"
        aria-expanded="${index === 0}"
      >
        ${item.info}
        <span class="arrow" aria-hidden="true"></span>
      </button>
    </h2>
    <div
      class="ac-panel"
      id="panel-${index}"
      role="region"
      aria-labelledby="trigger-${index}"
    >
      <p class="ac-text">${item.more}</p>
    </div>
  </li>
`;

const initFAQ = () => {
  const container = document.querySelector('.accordion-container');
  if (!container) return;

  container.innerHTML = faqItems.map(createFaqItemHTML).join('');
  new Accordion('.accordion-container', ACCORDION_CONFIG);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQ);
} else {
  initFAQ();
};
