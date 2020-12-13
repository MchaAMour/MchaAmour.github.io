$(function(){
  $(".main-nav-bar").load("../assets/pages/nav.html");
});
$(function(){
  $("#sgo-footer").load("../assets/pages/footer.html");
});
// for closing menu on desktop when click any where
$('section').on('click', function(){
  var menu = $('.dropdown-menudesktop');
  menuBtn.classList.remove("close"); 
  menu.removeClass("show");
  document.getElementsByClassName('menu-text')[0].innerHTML = 'MENU';
  showMenu = false; 
});
