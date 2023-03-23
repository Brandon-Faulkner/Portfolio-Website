/*const modeBtn = document.getElementById('mode');
const mode = window.localStorage.getItem('mode');

modeBtn.onchange = (e) => {
    if(modeBtn.checked === true){
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        window.localStorage.setItem('mode', 'light');
    } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem('mode', 'dark');
    }
}

if (mode == 'dark') {
    modeBtn.checked = false;
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
} else if(mode == 'light') {
    modeBtn.checked = true;
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
}*/

//#region Header & Nav

function Resize_Nav() {
  var desktopNav = document.getElementById("desktop-nav");
  var mobileNav = document.getElementById("mobile-nav");

  if(window.innerWidth <= 800){
    desktopNav.classList.remove("show-desktop");
    desktopNav.classList.add("hide");

    mobileNav.classList.remove("hide");
    mobileNav.classList.add("show-mobile");
    mobileNav.style.top = "-190px";
  }
  else {
    desktopNav.classList.remove("hide");
    desktopNav.classList.add("show-desktop");

    mobileNav.classList.remove("show-mobile");
    mobileNav.classList.add("hide");
  } 
}

window.onload = Resize_Nav;
window.onresize = Resize_Nav;

// Header Auto Show and Hide
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector("header");
  var desktopNav = document.getElementById("desktop-nav");
  var mobileNav = document.getElementById("mobile-nav");

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.classList.add("is-active");

    if(window.innerWidth <= 800){
      mobileNav.style.top = "-190px";
    }
    else {
      mobileNav.style.top = "-160px";
    }   

  } else {
    header.style.top = "-150px";
    header.classList.remove("is-active");

    mobileNav.style.top = "-300px";
  }

  if(currentScrollPos == 0) {header.classList.remove("is-active");}
  prevScrollpos = currentScrollPos;
}

// Mobile Navigation Menu
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);

//#endregion Header & Nav