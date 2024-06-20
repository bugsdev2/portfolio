
const menuBtn = document.querySelector('#sm-menu-btn');
const smallScreenNav = document.querySelector('#sm-screen-nav');

menuBtn.addEventListener('click', () => {
	smallScreenNav.style.display = "block";
})

document.addEventListener('click', (e) => {
	if(!e.target.dataset.menu){
		smallScreenNav.style.display = "none"
	}
})
