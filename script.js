const toggleSwitch = document.getElementsByClassName("dark-button")[0];
const currentTheme = localStorage.getItem('theme');

document.documentElement.setAttribute('data-theme', currentTheme);


function DarkMode() {
  if (localStorage.getItem('theme') == "light") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {        
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', DarkMode, false);

function unhide() {
    var hid = document.getElementsByClassName("action");
   
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
    else {
      hid[0].style.visibility = "hidden";
    }
      
}
function unhide2() {
    var hid = document.getElementsByClassName("action2");
   
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
    else {
      hid[0].style.visibility = "hidden";
    }
}
function unhide3() {
    var hid = document.getElementsByClassName("action3");
   
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
    else {
      hid[0].style.visibility = "hidden";
    }
}
function unhide4() {
    var hid = document.getElementsByClassName("action4");
   
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
    else {
      hid[0].style.visibility = "hidden";
    }
}

