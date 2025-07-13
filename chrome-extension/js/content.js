const BUTTON_CLASS = 'ask-grok-button';
const MODAL_CLASS = 'ask-grok-modal';

function createAskGrokButton() {
  const button = document.createElement('button');
  button.className = BUTTON_CLASS;
  button.innerHTML = '🤖';
  button.title = 'Ask Grok about this tweet';
  return button;
}

function getTweetUrl(tweetElement) {
  const linkElement = tweetElement.querySelector('a[href*="/status/"]');
  if (linkElement) {
    return `https://x.com${linkElement.getAttribute('href')}`;
  }
  
  const currentUrl = window.location.href;
  if (currentUrl.includes('/status/')) {
    return currentUrl.replace('twitter.com', 'x.com');
  }
  
  return '';
}

function createModal(tweetUrl) {
  const modal = document.createElement('div');
  modal.className = MODAL_CLASS;
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'modal-close';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = () => modal.remove();
  
  const title = document.createElement('h3');
  title.textContent = 'Ask Grok about this tweet';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'grok-input';
  input.value = tweetUrl;
  input.placeholder = 'Enter tweet URL';
  
  const askButton = document.createElement('button');
  askButton.className = 'grok-ask-button';
  askButton.textContent = 'Ask Grok';
  askButton.onclick = () => {
    const query = encodeURIComponent(input.value);
    window.open(`https://grok.com?q=${query}`, '_blank');
    modal.remove();
  };
  
  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(input);
  modalContent.appendChild(askButton);
  modal.appendChild(modalContent);
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  };
  
  return modal;
}

function addButtonToTweet(tweetElement) {
  if (tweetElement.querySelector(`.${BUTTON_CLASS}`)) {
    return;
  }
  
  const actionBar = tweetElement.querySelector('[role="group"]');
  if (!actionBar) {
    return;
  }
  
  const button = createAskGrokButton();
  button.onclick = (e) => {
    e.stopPropagation();
    const tweetUrl = getTweetUrl(tweetElement);
    const modal = createModal(tweetUrl);
    document.body.appendChild(modal);
  };
  
  const wrapper = document.createElement('div');
  wrapper.style.display = 'inline-flex';
  wrapper.style.alignItems = 'center';
  wrapper.appendChild(button);
  
  actionBar.appendChild(wrapper);
}

function addButtonToDetailView() {
  const tweetDetailElement = document.querySelector('article[data-testid="tweet"]');
  if (!tweetDetailElement || tweetDetailElement.querySelector(`.${BUTTON_CLASS}`)) {
    return;
  }
  
  const actionBar = tweetDetailElement.querySelector('[role="group"]');
  if (!actionBar) {
    return;
  }
  
  const button = createAskGrokButton();
  button.onclick = (e) => {
    e.stopPropagation();
    const tweetUrl = window.location.href.replace('twitter.com', 'x.com');
    const modal = createModal(tweetUrl);
    document.body.appendChild(modal);
  };
  
  const wrapper = document.createElement('div');
  wrapper.style.display = 'inline-flex';
  wrapper.style.alignItems = 'center';
  wrapper.appendChild(button);
  
  actionBar.appendChild(wrapper);
}

function processTwitterPage() {
  const tweets = document.querySelectorAll('article[data-testid="tweet"]');
  tweets.forEach(addButtonToTweet);
  
  if (window.location.pathname.includes('/status/')) {
    addButtonToDetailView();
  }
}

const observer = new MutationObserver(() => {
  processTwitterPage();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

processTwitterPage();