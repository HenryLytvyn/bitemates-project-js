import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const faqItems = [
  {
    info: "What programming language are most often used in your project?",
    more: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
  },
  {
    info: "What are the deadlines for the project?",
    more: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
  },
  {
    info: "What payment methods do you accept?",
    more: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
  },
  {
    info: "How can I contact you?",
    more: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
  },
  {
    info: "Do you provide advice or support?",
    more: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
  },
  {
    info: "What does the process of developing a software product look like from idea to implementation?",
    more: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
  }
];

const ACCORDION_CONFIG = {
  duration: 300,
  showMultiple: false,
  openOnInit: [0]
};

const createFaqItemHTML = (item) => `
  <li class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger" type="button">
        ${item.info}
        <span class="arrow" aria-hidden="true"></span>
      </button>
    </h2>
    <div class="ac-panel">
      <p class="ac-text">${item.more}</p>
    </div>
  </li>
`;

const handleAccordionClick = (e) => {
  const trigger = e.target.closest('.ac-trigger');
  if (!trigger) return;

  const item = trigger.closest('.ac');
  const panel = item.querySelector('.ac-panel');
  const arrow = trigger.querySelector('.arrow');
  const isActive = item.classList.contains('is-active');

  document.querySelectorAll('.ac-panel').forEach(p => {
    p.style.height = '0';
    p.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));

  if (!isActive) {
    panel.style.height = `${panel.scrollHeight}px`;
    panel.setAttribute('aria-expanded', 'true');
    arrow.classList.add('rotate');
  }
};

const initFAQ = () => {
  const accordionContainer = document.querySelector('.accordion-container');
  if (!accordionContainer) {
    console.warn('FAQ container not found');
    return;
  }

  try {
    accordionContainer.innerHTML = faqItems.map(createFaqItemHTML).join('');
    new Accordion('.accordion-container', ACCORDION_CONFIG);
    accordionContainer.addEventListener('click', handleAccordionClick);
    document.querySelectorAll('.ac-panel').forEach((panel, index) => {
      panel.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    });
  } catch (error) {
    console.error('Error initializing FAQ:', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQ);
} else {
  initFAQ();
}
