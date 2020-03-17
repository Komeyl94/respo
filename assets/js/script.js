$(document).ready(function () {
	$('#hamburger, #close-hamburger').on('click', function () {
		$('body').toggleClass('hamburger-open');
		$('#hamburger').toggleClass('open');
		$('.responsive-main-menu').toggleClass('open');
	});
	$('.profile-btn').on('click', function () {
		$(this).toggleClass('open');
	});
	$('.profile-btn > .children, .profile-btn').on('mouseleave', function () {
		$(this).removeClass('open');
	});
	$('#curtain').on('click', function () {
		$('body').removeClass('hamburger-open');
		$('#hamburger, .responsive-main-menu, .video-popup, .image-popup').removeClass('open');
		$('.video-popup video').trigger('pause');
	});
	var sliderData = {
		dots: false,
		autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		rows: 2,
		rtl: true,
		arrows: true,
		infinite: false,
		nextArrow: '<button class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
		prevArrow: '<button class="slick-next"><i class="icon icon-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
		            slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					initialSlide: 1,
					slidesToShow: 2,
		            slidesToScroll: 2,
					centerMode: true,
					centerPadding: '40px',
				}
			},
		]
	};
	if (jQuery().slick) {
		$('.movieCarousel').slick(sliderData);
		$('.carousel1').not('.slick-initialized').slick(sliderData);
		$(".carousel1").show();
		$(".tabList a:first-of-type").addClass("isActive");
		$(".eachMovie").show();
		$(".tabNum").on("click", function (e) {
			e.preventDefault();
			var id = $(this).attr('href');
			$('.slick-initialized').slick('unslick');
			$(".each").slideUp();
			$(id).slideDown();
			$(".tabNum").removeClass("isActive");
			$(this).addClass("isActive");
			$('.carousel' + id.substr(id.length - 1)).not('.slick-initialized').slick(sliderData);
		});
		$(".tabNum2").on("click", function (e) {
			e.preventDefault();
			var id = $(this).attr('href');
			$('.tv-show-section .slick-initialized').slick('unslick');
			$(".each").hide().removeClass('open');
			$(id).show().addClass('open');
			$(".tabNum2").removeClass("isActive");
			$(this).addClass("isActive");
			$('.carousel' + id.substr(id.length - 1)).not('.slick-initialized').slick(sliderData);
		});

		$('.postersCarousel').slick({
			dots: false,
			autoplay: false,
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows: true,
			rtl: true,
			infinite: false,
			nextArrow: '<button class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
			prevArrow: '<button class="slick-next"><i class="icon icon-chevron-right"></i></button>',
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
			]
		});

		$('.wallsCarousel').slick({
			dots: false,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			rows: 2,
			rtl: true,
			arrows: true,
			infinite: false,
			nextArrow: '<button class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
			prevArrow: '<button class="slick-next"><i class="icon icon-chevron-right"></i></button>',
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
			]
		});
		
		$('.topMoviesCarousel').slick({
			dots: false,
			autoplay: false,
			rtl: true,
			arrows: true,
			infinite: false,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 1,
			infinite: true,
			nextArrow: '<button class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
			prevArrow: '<button class="slick-next"><i class="icon icon-chevron-right"></i></button>',
			responsive: [
			  {
				breakpoint: 768,
				settings: {
				  centerMode: true,
				  centerPadding: '40px',
				}
			  },
			  {
				breakpoint: 576,
				settings: {
				  centerMode: true,
				  centerPadding: '30px',
				}
			  }
			]
		});
	}
	
	// Add first letter of week to each week item
	$('.tabNum2').each(function() {
		$(this).attr('week-letter', $(this).text().charAt(0));
	});

	// Focus search input and scroll to top on search click
	$('#bottom-nav-search').on('click', function (e) {
		e.preventDefault();
		$('#search-input').focus();
		$("html,body").animate({ scrollTop: $("#curtain").offset().top }, "1000"); 
	});

	// Remove active class from all bottom navigation items then 
	// check url pathname to add active class to the current nav item
	$('.bottom-navigation-item').removeClass('active');
	$('.bottom-navigation-item:nth-child(1)').addClass('active');
	var pathname = window.location.pathname;
	if (pathname === '/') {
		$('.bottom-navigation-item:nth-child(1)').addClass('active');
	} else if (pathname.includes('movies')) {
		$('.bottom-navigation-item:nth-child(2)').addClass('active');
	} else if (pathname.includes('series')) {
		$('.bottom-navigation-item:nth-child(3)').addClass('active');
	} else if (pathname.includes('anime')) {
		$('.bottom-navigation-item:nth-child(4)').addClass('active');
	} else if (pathname.includes('user')) {
		$('.bottom-navigation-item:nth-child(6)').addClass('active');
	}


	$('.single-box-header.clickable').on('click', function () {
		$(this).parent('.all-info').toggleClass('close');
	});

	$('.trailer-box').on('click', function () {
		$('body').addClass('hamburger-open');
		$('.video-popup').addClass('open');
		$('.video-popup video').trigger('play');
	});

	$('.video-popup .close-popup').on('click', function () {
		$('body').removeClass('hamburger-open');
		$('.video-popup').removeClass('open');
		$('.video-popup video').trigger('pause');
	});

	var counter = 0;
	var isDragging = false;
	$(".posters .poster, .walls .wall")
		.mousedown(function () {
			$(window).mousemove(function () {
				isDragging = true;
				$(window).unbind("mousemove");
			});
		})
		.mouseup(function () {
			var wasDragging = isDragging;
			isDragging = false;
			$(window).unbind("mousemove");
			if (!wasDragging) {
				var src = $(this).find('img').attr('data-src');
				$('body').addClass('hamburger-open');
				$('.image-popup').addClass('open');
				$('.image-popup .popup-img').css('background-image', 'url(' + src + ')');
			}
		});
	$('.image-popup .close-popup').on('click', function () {
		$('body').removeClass('hamburger-open');
		$('.image-popup').removeClass('open');
		$('.image-popup .popup-img').css('background-image', '');
	});

	$("input.share-url").focus(function () {
		$(this).select();
		$(".share-popup, .share-btn").addClass("open");
	});

	$("input.share-copy").on('click', function (e) {
		e.preventDefault();
		$(".share-popup, .share-btn").toggleClass("open");
		$('input.share-url').select();
		document.execCommand("copy");
		$(this).val('کپی شد!')
	});

	$(".share-btn").on('click', function () {
		$(this).toggleClass('open');
		$('.share-popup').toggleClass("open");
	});

	$('.share-popup').on('mouseleave', function () {
		$(this).removeClass('open');
		$('.share-btn').removeClass('open');
	});
	$('.episode-dl-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open').parent().siblings('.episode-links').slideToggle()
	});
	$('.clickkk').on('click', function () {
		$('body').toggleClass('open-cover');
	});

	$("#search-input").on("keyup", function () {
		searchAjax($(this));
	});

	var searchAjax = function (input) {
		var search = input.val();
		if (search.length >= 3) {
			$(".search-results").show();
			if (request !== undefined) {
				request.abort();
			}
			var request = $.ajax({
				url: "/ajax",
				method: "POST",
				data: {
					csrf_token: $('meta[name=csrf_token]').attr("content"),
					action: 'search',
					offset: 0,
					query: search
				},
				success: function (res) {
					$(".search-results").html(res);
					$(".search-more").attr("href", ("/search?q=" + search));
				}
			})
		} else {
			$(".search-results").hide();
			$(".search-results").html("");
		}
	}

	$('#resend-mail').on('click', function () {
		$('#resend-mail').addClass("loading");
		$('#resend-mail').attr("disabled", true);
		$.ajax({
			url: "/ajax",
			method: "POST",
			data: {
				csrf_token: $('meta[name=csrf_token]').attr("content"),
				action: "resend-mail",
			},
			context: document.body
		}).done(function (data) {
			$('#resend-mail').removeClass("loading");
			$('#resend-mail').addClass("success");
			$('#resend-mail').html('ایمیل ارسال شد <i class="icon icon-buffer"></i>');
		});
	});

	$('#comment-submit').on('click', function (e) {
		e.preventDefault();
		$('#comment-submit').addClass("loading");
		$('#comment-submit').attr("disabled", true);
		$.ajax({
			url: "/ajax",
			method: "POST",
			data: {
				csrf_token: $('meta[name=csrf_token]').attr("content"),
				action: "submit-comment",
				id: $('#archive-id').val(),
				comment: $('#comment-text').val(),
				reply: $('#reply-comment-input').val()
			},
			context: document.body
		}).done(function (data) {
			$('#comment-submit').removeClass("loading");
			$('#comment-submit').addClass("success");
			$('#comment-text').hide();
			$('#comment-submit').html('<i class="icon icon-check"></i> نظر شما با موفقیت ارسال شد. پس از تایید، نظر شما نمایش داده خواهد شد.');
			$('#comment-text').text('');
			$('#reply-comment-input').val("0");
			$('.reply-to').text('');
			$('.comment-reply-content').hide();
		}).fail(function (data) {
			$('#comment-submit').removeClass("loading");
			$('#comment-submit').attr("disabled", false);
		});
	});

	$('.reply-comment').on('click', function (e) {
		e.preventDefault();
		$('#reply-comment-input').val($(this).attr('data-id'));
		$('.reply-to').text('پاسخ به: ' + $(this).parent().find('.name').text());
		$('.comment-reply-content').show();
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".comment-reply-content").offset().top - 60
		}, 500);
		$('#comment-text').focus();
	});
	$('#delete-reply-comment').on('click', function (e) {
		e.preventDefault();
		$('#reply-comment-input').val("0");
		$('.reply-to').text('');
		$('.comment-reply-content').hide();
	});

	$('#load-more-comments > a').on('click', function () {
		var athis = $(this);
		athis.parent('div').addClass('loading');
		$.ajax({
			url: "/ajax",
			method: "POST",
			data: {
				csrf_token: $('meta[name=csrf_token]').attr("content"),
				action: "comments",
				id: $(".comments .comment").last().attr("data-id"),
				x: athis.parent().attr("data-x"),
				t: athis.parent().attr("data-t")
			},
			context: document.body
		}).done(function (data) {
			$('.page-data').append(data);
			athis.parent('div').removeClass("loading");
			if (data.length === 0) {
				$('#load-more-comments > a').remove();
			}
		}).fail(function (data) {
			athis.parent('div').removeClass("loading");
			athis.parent('div').remove();
		});
	});
	$('#favstar').on('click', function () {
		var athis = $(this);
		var checkbox = document.getElementById("star2");
		var action = "favorite_archive";
		if (checkbox.checked == true) {
			action = "remove_favorite_archive";
		}
		$.ajax({
			url: "/ajax",
			method: "POST",
			data: {
				csrf_token: $('meta[name=csrf_token]').attr("content"),
				action: action,
				id: athis.attr("data-id")
			},
			context: document.body
		}).done(function (data) {
			checkbox.checked = (action == "favorite_archive");
		}).fail(function (data) {
			checkbox.checked = (action == "remove_favorite_archive");
		});
	});
	$('#watchlist-btn').on('click', function () {
		var action = "watch_archive";
		if ($("#watchlist-btn i").hasClass("icon-check")) {
			action = "remove_watch_archive";
			$("#watchlist-btn").html('افزودن به لیست تماشا <i class="icon icon-watchlist"></i>');
		} else {
			$("#watchlist-btn").html('لیست تماشا <i class="icon icon-check"></i>');
		}

		$.ajax({
			url: "/ajax",
			method: "POST",
			data: {
				csrf_token: $('meta[name=csrf_token]').attr("content"),
				action: action,
				id: $(this).attr("data-id")
			},
			context: document.body
		}).done(function (data) {
		}).fail(function (data) {
			if (action == "watch_archive") {
				$("#watchlist-btn").html('افزودن به لیست تماشا <i class="icon icon-watchlist"></i>');
			} else {
				$("#watchlist-btn").html('لیست تماشا <i class="icon icon-check"></i>');
			}
		});
	});

	videojs('player').ready(function () {
		var myPlayer = this;
		$('.playlist-item').on('click', function () {
			var src = $(this).attr('data-url');
			var poster = $(this).attr('data-poster');
			$('.playlist-item').removeClass('active');
			$(this).addClass('active');
			myPlayer.src({ src });
			myPlayer.poster(poster);
			myPlayer.play();
		});
	});
});

$(function () {
	$('.dl-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({ top: relY, left: relX })
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({ top: relY, left: relX })
		});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.scrolltop:hidden').stop(true, true).fadeIn();
	} else {
		$('.scrolltop').stop(true, true).fadeOut();
	}
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $("#curtain").offset().top }, "1000"); return false }) })
