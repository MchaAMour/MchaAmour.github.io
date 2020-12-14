$(function(){
  $(".main-nav-bar").load("nav.html");
});
$(function(){
  $("#sgo-footer").load("footer.html");
});
// for closing menu on desktop when click any where
$('section').on('click', function(){
  var menu = $('.dropdown-menudesktop');
  menuBtn.classList.remove("close"); 
  menu.removeClass("show");
  document.getElementsByClassName('menu-text')[0].innerHTML = 'MENU';
  showMenu = true; 
});
