// variables
// var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
// $header_top.find('a').on('click', function() {
//   $(this).parent().toggleClass('open-menu');
// });



// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.section',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  // anchors: ['top', 'about', 'crew' ],
  menu: '#menu', 
});