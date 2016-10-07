(function($) {

	$.fn.ntf = function(settings) {
		
		var settings_default = {
			color: 'blue',
			duration: 5,
			permanent: false,
			position: 'top',
			responsive: true,
			text: '',
			width: 600
		};

		var settings = $.extend(settings_default, settings);

		var ntf_position = (settings['position'] == 'top') ? ' top' : ' bottom';
		var ntf_responsive = (settings['responsive'] == true) ? ' responsive' : '';

		var ntf_object = $('<div/>', {
			id: 'ntf',
			class: ntf_position + ntf_responsive,
			width: (settings['responsive']) ? '' : settings['width'],
			'data-color': settings['color']
		});

		var ntf_text = $('<div/>', {
			class: 'ntf-text',
			html: settings['text']
		});

		var ntf_close = $('<div/>', {
			class: 'ntf-close'
		});

		var btn_close = $('<button/>', {
			html: '<span>»</span>',
			click: function(e) {
				close($('#ntf'));
			}
		});

		$(ntf_close).append(btn_close);

		(settings['position'] == 'bottom') ? $(ntf_object).append(ntf_close, ntf_text)
			: $(ntf_object).append(ntf_text, ntf_close);

		function init_time_out(ntf_element) {
			if (settings['permanent'] == false) {
				setTimeout(function() {
					close(ntf_element);
				}, settings['duration'] * 1000);
			}
		}

		function open() {
			var aux_ntf_object = $(ntf_object);

			if (settings['position'] == 'bottom')
				$(aux_ntf_object).prependTo('body').addClass('slideUp');
			else
				$(aux_ntf_object).prependTo('body').addClass('slideDown');
			
			init_time_out(aux_ntf_object);
		}

		function close(ntf_element) {
			if (settings['position'] == 'bottom') {
				$(ntf_element).animate({
					marginBottom: '-100%'
				}, 800, function() {
					$(ntf_element).remove();
				});	
			}
			else {
				$(ntf_element).animate({
					marginTop: '-100%'
				}, 800, function() {
					$(ntf_element).remove();
				});
			}
		}

		function __init_ntf__() {
			if ($('#ntf'))
				close($('#ntf'));			
			open();
		}

		__init_ntf__();

	};

	$.ntf = $.fn.ntf;

}) (jQuery);