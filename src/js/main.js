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

			_this.children('img').removeAttr('src').attr('src','img/logo/logo-' + _index + '.png');
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


})(jQuery);