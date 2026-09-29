'use strict';

const portrait = document.querySelector('.author-image img');

// Missing files leave the neutral placeholder intact, including on local file URLs.
function updatePortrait() {
  portrait.parentElement.classList.toggle('has-image', portrait.complete && portrait.naturalWidth > 0);
}

portrait.addEventListener('load', updatePortrait);
portrait.addEventListener('error', updatePortrait);
updatePortrait();
