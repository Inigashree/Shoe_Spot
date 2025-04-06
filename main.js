// Show menu toggle
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};

showMenu('nav-toggle', 'nav-menu');

// Hide menu when a nav link is clicked
const navLink = document.querySelectorAll('.nav__link'),
	navMenu = document.getElementById('nav-menu');

function linkAction() {
	navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute('id');

		const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (navLink) {
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				navLink.classList.add('active');
			} else {
				navLink.classList.remove('active');
			}
		}
	});
}

window.addEventListener('scroll', scrollActive);

// Change background header on scroll
window.onscroll = () => {
	const nav = document.getElementById('header');
	if (window.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
};
