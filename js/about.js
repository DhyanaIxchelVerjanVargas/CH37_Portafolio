const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnScrollTop = document.getElementById("boton-arriba");

navToggle.addEventListener("click", () =>{
	navMenu.classList.toggle("nav-menu_visible");
});

//Le da la funcionalidad al botón de subir
btnScrollTop.addEventListener('click', function(event){
	event.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})