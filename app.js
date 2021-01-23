const hum = document.querySelector('.header .nav-bar .nav-list .hum');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

hum.addEventListener('click', ()=>{
  hum.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll' ,()=>{
	var scroll_position = window.scrollY;

	if (scroll_position > 250 ) {
		document.getElementById("header").style.backgroundColor = '#29323c';
	}else{
		document.getElementById("header").style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item)=>{
    item.addEventListener('click', ()=>{
  		hum.classList.toggle('active');
  		mobile_menu.classList.toggle('active');
  });
});

setTimeout(function(){
  document.getElementById("vid").play();
}, 5500);

    
