const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const isHidden = mobileMenu.classList.contains('hidden');
  menuIcon.setAttribute(
    'd',
    isHidden ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12',
  );
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });
});

const typingText = document.getElementById('typing-text');
const words = ['Digital', 'Scalable', 'Modern', 'Creative'];
let wordIdx = 0;
let charIdx = 0;
let isDel = false;

function typeEffect() {
  const currentWord = words[wordIdx];
  const delay = isDel ? 100 : 200;

  typingText.textContent = currentWord.substring(0, charIdx + (isDel ? -1 : 1));
  charIdx += isDel ? -1 : 1;

  if (!isDel && charIdx === currentWord.length) {
    isDel = true;
    setTimeout(typeEffect, 1500);
  } else if (isDel && charIdx === 0) {
    isDel = false;
    wordIdx = (wordIdx + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, delay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  typeEffect();
});
