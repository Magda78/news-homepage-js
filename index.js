const menu = document.querySelector('.nav__open__menu');
const openBtn = document.getElementById('open-icon');
const closeBtn = document.getElementById('close-icon');
const overlay = document.querySelector('.overlay');

const openIconHandler = () => {
	menu.classList.add('active');
	overlay.classList.add('fadeIn');
};
const closeIconHandler = () => {
	menu.classList.remove('active');
	overlay.classList.remove('fadeIn');
	//overlay.classList.add('fadeOut');
};

openBtn.addEventListener('click', openIconHandler);
closeBtn.addEventListener('click', closeIconHandler);
