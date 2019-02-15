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
	
	//Плавная прокрутка
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	
//	Модальное окно
	$("#fade").modal({
	  fadeDuration: 100
	});
	
	
// Слайдер
	$("#reviews-slider").owlCarousel({
		singleItem: true,
		
		navigation: true,
		navigationText: ["",""],
		slideSpeed: 500
	});
	
//Форма обратной связи для заявления
	
	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			phone: { required: true },
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			phone: "Пожалуйста, введите свой телефон",
			
		},
		
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}
		
	})
	
	// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
	
//Форма обратной связи для отзовы и коментарии
	
	// jQuery Validate JS 2
	$("#modal-form").validate({
		rules: {
			name: { required: true },
			massage: { required: true },
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			massage: "Пожалуйста, введите текст сообщения",
			
		},
		
		submitHandler: function(form) {
		  ajaxFormSubmit2();
		}
		
	})
	
	// Функция AJAX запрса на сервер 2
	function ajaxFormSubmit2(){
		var string = $("#modal-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос 2
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#modal-form").slideUp(800);
				$('#answer2').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
	
	
	
	
	
	
	
	
	
	
	
//	
//	// jQuery Validate JS
//	$("#contact-form").validate({
//		rules: {
//			name: { required: true },
//			phone: { required: true },
//		},
//		messages: {
//			name: "Пожалуйста, введите свое имя",
//			phone: "Пожалуйста, введите свой телефон",
//			
//		},
//		
//		submitHandler: function(form) {
//		  ajaxFormSubmit();
//		}
//		
//	})
////	// jQuery Validate JS 2
////	$("#modal-form").validate({
////		rules: {
////			name: { required: true },
////			massage: { required: true },
////		},
////		messages: {
////			name: "Пожалуйста, введите свое имя",
////			massage: "Пожалуйста, оставьте свой отзыв",
////			
////		},
////		
////		submitHandler: function(form) {
////		  ajaxFormSubmit();
////		}
////		
////	})
//	
//	// Функция AJAX запрса на сервер
//	function ajaxFormSubmit(){
//		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 
//
//		// Формируем ajax запрос
//		$.ajax({
//			type: "POST", // Тип запроса - POST
//			url: "php/mail.php", // Куда отправляем запрос
//			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
//			
//			// Функция если все прошло успешно
//			success: function(html){
//				$("#contact-form").slideUp(800);
//				$('#answer').html(html);
//			}
//		});
//
//		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
//		return false; 
//	}
////	
////	// Функция AJAX запрса на сервер 2
////	function ajaxFormSubmit(){
////		var string = $("#modal-form").serialize(); // Соханяем данные введенные в форму в строку. 
////
////		// Формируем ajax запрос
////		$.ajax({
////			type: "POST", // Тип запроса - POST
////			url: "php/mail.php", // Куда отправляем запрос
////			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
////			
////			// Функция если все прошло успешно
////			success: function(html){
////				$("#modal-form").slideUp(800);
////				$('#answer2').html(html);
////			}
////		});
////
////		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
////		return false; 
////	}
//	
	
	
	
	
	
});