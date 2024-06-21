//////////////////////////// Toggling the small screen menu button

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

/////////////////////////////////////////////////////////////////


//////////////////////////////////////// Video Play on Mouse over

document.addEventListener('mouseover', (e) => {
	if(e.target.dataset.video) {
		e.target.currentTime = 0;
		e.target.play();
	};
})

/////////////////////////////////////////////////////////////////

//////////////////////////////////////// Video Play on Mouse over

document.addEventListener('mouseout', (e) => {
	if(e.target.dataset.video) {
		e.target.pause();
	};
})

/////////////////////////////////////////////////////////////////
