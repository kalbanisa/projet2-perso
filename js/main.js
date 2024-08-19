// memu-btn material-symbols-rounded menu
const navbarMenu = document.querySelector(".navbar .links");

// pour fermer le formulaire du login close
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const showPopupBtn = document.querySelector(".login-btn ");


// mon teste pour fermer l menu
const navbar = document.querySelector(".navbar .close-btn")
 
// pour fair appatre le login 
const formPopup = document.querySelector(".form-popup  ");

// en rapport avec apparition du formulaire
const menuBtn = document.querySelector(".form-popup .close-btn");

//  En rapport avec le botom link A 
const loginSignupLink = document.querySelectorAll("form-box .bottom-link a");

// memu-btn material-symbols-rounded menu
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});
// SHow form popup
// pour fair appatre le login  

showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup")
});
 
// Hide form popup
// pour fermer le formulaire du login close 

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// mon teste pour fermer l menu
navbar.addEventListener("click", () => showPopupBtn.click())

//  En rapport avec le botom link A 
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

 