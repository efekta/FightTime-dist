$(document).ready(function() {

/*=====================
Social Dropdown Toggle
======================*/
$(".social").click(function(){
	$(".social-dropdown").slideToggle();
});

/*=================
Search Toggle
==================*/
$(".search-btn").click(function(){
 	  $(".search-bar").slideToggle();
  });
});

/*=================
Sidebar Tabs
==================*/
$(".tab_items").not(":first").hide();
$(".sidebar .tab").click(function() {
	$(".sidebar .tab").removeClass("tab-active ").eq($(this).index()).addClass("tab-active");
	$(".tab_items").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab-active ");

/*=================
head-nav-mob
==================*/
// $(".menu-gamburger").on("click", function() {
// 	$(".head-nav-mob").addClass("head-nav-mob_show");
// 	// $("body").addClass("overlay");
// });
$('.menu-gamburger').on("click", function() {
	$('body').addClass('overlay');
	$(".mob-menu").addClass("head-nav-mob_show");

	$(".menu-gamburger-close").on("click", function() {
		$('body').removeClass('overlay');
		$(".mob-menu").removeClass("head-nav-mob_show");
	})
});

// $("#nav-icon4").click(function(){
// 	$(this).toggleClass("open");
// });


// $(".close").on("click", function(event) {
// 	$(".head-nav-mob").removeClass("head-nav-mob_show");
// });

/*========================
 fixed header
 =======================*/
$(window).scroll(function() {
	if($(this).scrollTop() >= 50) {
	$('.head-wrap').addClass('page-head_fixed');
}
else{
	$('.head-wrap').removeClass('page-head_fixed');
	}
});

/* ========================
  fixed sidebar
==========================*/

$(window).scroll(function() {
	if($(this).scrollTop() >= 460) {
		$('.sidebar-container').addClass('sidebar-container_fixed');
		// $('.tabs').addClass('tabs-top');
	}
	else{
		$('.sidebar-container').removeClass('sidebar-container_fixed');
		// $('.tabs').removeClass('tabs-top');
	}
});

/* ==========================================
  Функции открытия и закрытия сайдбара
============================================*/

$(".fe-mobi-bt").on("click", function(event) {
	$(".sidebar-wrap").toggleClass("sidebar-wrap-show");
});

$('.fe-mobi-bt').click(function(){
  if (!$(this).data('status')) {
  	$(this).html('Закрыть');
    $(this).data('status', true);
  }
  else {
  	$(this).html('Открыть');
    $(this).data('status', false);
  }
});


/* ========================
	Nicescroll
 =========================*/
$(".tab_content").niceScroll({
cursorcolor:"#bbb",
cursorwidth: 0,
cursorborder: 0,
enablekeyboard: false
});

/* ========================
  fixed tabs sidebar
==========================*/
// $('.sidebar').niceScroll(function(){
//     if($(this).scrollTop()>50){
//         $('.tabs').addClass('tabs-fixed');
//     }
//     else if ($(this).scrollTop()<50){
//         $('.tabs').removeClass('tabs-fixed');
//     }
// });


/* ========================
infinite
==========================*/
$('.story').infiniteScroll({
  path: '.pagination__next',
  append: '.home-widget-featured-sub-main-wrapp',
  status: '.scroller-status',
  hideNav: '.pagination',
});
