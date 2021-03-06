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
var menuStatus = 0;
$('.menu-gamburger').on("click", function() {
	if($('body').hasClass('overlay')){
		$('body').removeClass('overlay');
		$('.mob-menu').removeClass("head-nav-mob_show");
	}else{
		$('body').addClass('overlay');
		menuStatus = 1;
		$(".mob-menu").addClass("head-nav-mob_show");
	}
});
$(".menu-gamburger-close").on("click", function() {
		$('body').removeClass('overlay');
		$(".mob-menu").removeClass("head-nav-mob_show");
});

///////
// $('.menu-gamburger').on("click", function() {
// 	if($('.wrapper-page').hasClass('overlay')){
// 		$('.wrapper-page').removeClass('overlay');
// 		$('.mob-menu').removeClass("head-nav-mob_show");
// 	}else{
// 		$('.wrapper-page').addClass('overlay');
// 		menuStatus = 1;
// 		$(".mob-menu").addClass("head-nav-mob_show");
// 	}
// });

// 	$(".menu-gamburger-close").on("click", function() {
// 		$('.wrapper-page').removeClass('overlay');
// 		$(".mob-menu").removeClass("head-nav-mob_show");
// });


// $(document).on('click', function(event) {
//     if ($(event.target).closest('.mob-menu').length) return;

// 		if($('body').hasClass('overlay')){
// 		$('body').removeClass('overlay');
// 		$('.mob-menu').removeClass('head-nav-mob_show');
// 	}
//     event.stopPropagation();
// });


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
	if($(this).scrollTop() >= 50) {
		$('.sidebar-container').addClass('sidebar-container_fixed');
	}
	else{
		$('.sidebar-container').removeClass('sidebar-container_fixed');
	}
});

/* ==========================================
  Функции открытия и закрытия сайдбара
============================================*/

$(".fe-mobi-bt").on("click", function(event) {
	$(".sidebar-wrap").toggleClass("sidebar-wrap-show");
	$(".tab_content").toggleClass("tab_content-show");
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
$('.tab_content').niceScroll({
	cursorcolor:"#bbb",
	cursorwidth: 0,
	cursorborder: 0,
	enablekeyboard: false
});



/* ========================
infinite
==========================*/
$('.infinite-content').infiniteScroll({
  path: '.pagination__next',
  append: '.row-post',
  status: '.page-load-status',
  // status: '.scroller-status',
  hideNav: '.pagination',
});
