$(document).ready(function(){
	console.log("Hello world!");
	
// Меню
	
	var navToggleButton = $('#navigation-toggle');
//	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list-element-link');
	
	
	// События по клику на иконку навигации
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		
		if (navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active")
		} else {
			navToggleButton.addClass("active");
		}

	})
	// События по клику на ссылки в навигации
	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {
			
			if (navToggleButton.hasClass("active")) {
				navToggleButton.removeClass("active")
			} else {
				navToggleButton.addClass("active");
			}
			
		}

		navBlock.removeClass(navBlockOpen);
		
	})
	
	
//	Модальное окно
	$("#fade").modal({
	  fadeDuration: 100
	});
	
	// Вызов слайдера owl-crousel
//	$("#top-slider").owlCarousel({
//		singleItem: true,
//		navigation: true,
//		theme: "top-slider-theme",
//		navigationText: ["",""],
//		slideSpeed: 500
//	});
	
	$("#reviews-slider").owlCarousel({
		singleItem: true,
		
		navigation: true,
		navigationText: ["",""],
		slideSpeed: 500
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});