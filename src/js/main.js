var StartChange;
var StopChange;

(function ($) {

	$(document).ready(function () {


		//open color box to change theme
		$('.change-theme').click(function (e) {
			e.preventDefault();
			var _themeSelector = $('#theme');
			if (_themeSelector.hasClass('colorbox-open'))
				_themeSelector.removeClass('colorbox-open');
			else
				_themeSelector.addClass('colorbox-open');
		});
		$('.all-colors>button.btn').click(function (e) {
			e.preventDefault();
			var _color = $(this).attr('data-color');
			$('body').removeAttr('id').attr('id', _color);
		});



		//open logo box to change logo
		$('.change-logo').click(function (e) {
			e.preventDefault();
			var _logoSelector = $('#logo-changer');
			if (_logoSelector.hasClass('logobox-open'))
				_logoSelector.removeClass('logobox-open');
			else
				_logoSelector.addClass('logobox-open');
		});
		$('.all-logos>button.btn').click(function (e) {
			e.preventDefault();
			//var _color = $(this).attr('data-color');
			//$('body').removeAttr('id').attr('id', _color);
			var _this = $(this);
			var _index = _this.index() + 1;
			var _logoUrl = 'img/logo/logo-' + _index + '.png';

			$('a.navbar-brand>img').removeAttr('src').attr('src', _logoUrl);
			_this.children('img').removeAttr('src').attr('src', _logoUrl);
			$('.favicon').removeAttr('href').attr('href','img/favicon/fav-' + _index + '.png');
		});


		//same height for all div
		$.fn.matchHeight = function() {
			var _this = this;
			var _maxHeight = 0;
			var _thisOuterHeight = _this.outerHeight();
			_this.each(function() {
				if (_maxHeight < _thisOuterHeight)
					_maxHeight = _thisOuterHeight;
			});
			_this.height(_maxHeight);   //set height
		};

		if ($(window).outerHeight() > 991)
			$('.each-small-pricing').matchHeight();

		$('.each-feature').matchHeight();
		$('.all-services .col-md-3').matchHeight();


		$('.call-phone').attr('data-toggle', "tooltip").attr('title', '+88017235941615').attr('data-placement',"bottom");

		$('[data-toggle="tooltip"]').tooltip();


		//animate when scroll to another section
		$('#main-menu a').click(AnimateScroll);
		$('.banner-btn>a').click(AnimateScroll);
		$('.btn-order').click(AnimateScroll);
		$('.start-migrate>a').click(AnimateScroll);
		function AnimateScroll ()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top	//(-0) because navbar height 50px
					}, 1000);
					return false;
				}
			}
		}

	});

	$(window).load(function () {

		sliderLoad();

	});

	var sliderLoad = function () {
		var _w = parseInt($(this).outerWidth());
		$('.slider').fractionSlider({
			'fullWidth':		true,
			'controls': 		false,
			'pager': 			true,
			'responsive':		true,
			'dimensions': 		_w +", 400",
			'increase': 		false
		});
	}


	StartChange = function () {
		$('.admin-only').show();
		console.log("Close the console now, change the color & logo. Have fun !!!")
	};
	StopChange = function () {
		$('.admin-only').hide();
		console.log("Changing option is turned off, to change again type 'StartChange();' in console. GoodBye!")
	}

	console.warn("To change color and logo type 'StartChange();' here and enter");

})(jQuery);
