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


		//same height for all div
		var maxHeight = 0;
		var eachSmallPricing = $('.each-small-pricing');
		eachSmallPricing.each(function () {
			var _thisHeight = $(this).outerHeight();
			if (maxHeight < _thisHeight)
				maxHeight = _thisHeight;
		});
		eachSmallPricing.height(maxHeight);

		//jquery slider init (this should be initialize at end)
		$(".anim-slider").animateSlider({
			autoplay    :   true,   //starts the autoplay
			interval    :   2000,   //time between slides if autoplay is true
			animations  :           //specify the animations for each element of the slide
				{
				0 :
					{
					h1 : {   //tagName or id or class name of the element
						show: "bounceInUp",   //class to add when the element appears
						hide: "flipOutX",  //class to add when the element disappears
						delayShow: "delay0-5s"   //class to add to delay show effect
					},
					h3 : {
						show: "bounceIn",
						hide: "bounceOut",
						delayShow: "delay1s"
					},
					ul : {
						show: "rotateIn",
						hide: "rotateOut",
						delayShow: "delay1-5s"
					}
				},
				1 :
					{
					".xaxa1": {
						show: "slideInRight",
						hide: "slideInOut",
						delayShow: "delay0-5s"
					},
					"#test1": {
						show: "slideInLeft",
						hide: "slideOutRight",
						delayShow: "delay1s"
					},
					".offers1": {
						show: "fadeIn",
						hide: "fadeOut",
						delayShow: "delay1-5s"
					}
				},
				2 :
					{
					".xaxa2": {
						show: "shakeX",
						hide: "shakeX",
						delayShow: "delay0-5s"
					},
					"#test2": {
						show: "rotateInUpLeft",
						hide: "rotateOutUpLeft",
						delayShow: "delay1s"
					},
					".offers2": {
						show: "rotateIn",
						hide: "rotateOut",
						delayShow: "delay1-5s"
					}
				}
			}
		});
	});
})(jQuery);