(function($) {

	$.fn.ntf = function(settings) {
		
		// Propiedades que tendrá la notificación por default.
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

		// Creo el div que será el contenedor principal de la notificación.
		var ntf_object = $('<div/>', {
			id: 'ntf',
			class: ntf_position + ntf_responsive,
			width: (settings['responsive']) ? '' : settings['width'],
			'data-color': settings['color']
		});

		// Creo el div que contendrá el texto de la notificación. 
		var ntf_text = $('<div/>', {
			class: 'ntf-text',
			html: settings['text']
		});

		// Creo el div que contendrá el botón de cerrar.
		var ntf_close = $('<div/>', {
			class: 'ntf-close'
		});

		// Creo el botón para cerrar la notificación.
		var btn_close = $('<button/>', {
			html: '<span>»</span>',
			click: function(e) {
				close($('#ntf'));
			}
		});

		// Adjunto el botón de cerrar dentro de su div contenedor.
		$(ntf_close).append(btn_close);


		// Verifico primero el parámetro 'position';
		// Si es bottom, adjunto al div de la notificación el contenedor de cierre y luego el texto. 
		// De lo contrario, es decir, si está en top, adjunto primero el contenedor de texto
		// y luego el contenedor de cierre.
		(settings['position'] == 'bottom') ? $(ntf_object).append(ntf_close, ntf_text)
			: $(ntf_object).append(ntf_text, ntf_close);


		// Inicia la función que se encargará de cerrar automáticamente las notificaciones
		// que no sean permanentes después de un terminado tiempo.
		// El parámetro 'ntf_element' es la notificación que se va a cerrar.
		function init_time_out(ntf_element) {
			if (settings['permanent'] == false) {
				setTimeout(function() {
					close(ntf_element);
				}, settings['duration'] * 1000);
			}
		}

		// Adjunta al 'body' de la página la notificación.
		// Adicionalmente, se llama a la función 'init_time_out()' para que inicialize
		// la cuenta regresiva de cierre a la nueva notificación que se está añadiendo.
		function open() {
			var aux_ntf_object = $(ntf_object);

			if (settings['position'] == 'bottom')
				$(aux_ntf_object).prependTo('body').addClass('slideUp');
			else
				$(aux_ntf_object).prependTo('body').addClass('slideDown');
			
			init_time_out(aux_ntf_object);
		}

		// Cierra la notificación.
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

		// Inicia la notificación.
		function __init_ntf__() {
			if ($('#ntf'))
				close($('#ntf'));			
			open();
		}

		__init_ntf__();

	};

	$.ntf = $.fn.ntf;

}) (jQuery);