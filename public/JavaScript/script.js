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