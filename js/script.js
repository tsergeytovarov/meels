$(function(){
	
	// toggled filter 
	$('.catalog-section').find('h3').on('click', function(){

		$(this).parents('.catalog-section').toggleClass('close');

	})

	// main slider
	$('.slider').bxSlider({	mode: 'fade', auto: true });

	// tab control single tovar
	$('.tab-control').find('a').on('click',function(){
		$('.tab-control').find('a').removeClass('active');
		$(this).addClass('active');
	
		$('.tab-content').removeClass('active');
		$('.' + $(this).attr('data-tab')).addClass('active');

		return false;
	})

	// open pop up
	$('.get-pop-up').on('click',function(){
		$('.overlay').addClass('active');
		$('.' + $(this).attr('data-pop-up')).addClass('active');
		$('body, html').css('overflow', 'hidden');
		return false;
	})

	// close pop up
	$('.pop-up-wrapper').find('.close-pop-up').on('click', function(){
		$(this).parents('.pop-up-wrapper').removeClass('active');
		$('body, html').css('overflow', 'auto');
		$('.overlay').removeClass('active');
		return false;
	})

	$('.overlay').on('click', function(){
		$('.pop-up-wrapper').removeClass('active');
		$('body, html').css('overflow', 'auto');
		$('.overlay').removeClass('active');
	})

	var filter_min = 4;
	var filter_max = 10;

	var filter_2_min = 30;
	var filter_2_max = 80;

	// sliders 1
	$( "#vatt-slider-range" ).slider({
      range: true,
      min: 2,
      max: 12,
      values: [ filter_min, filter_max ],
      slide: function( event, ui ) { // это функция которая вызывается по изменению слайда
        $('#vatt-slider-range .ui-slider-handle:first').attr('after-content', ui.values[ 0 ] + " Вт");
    	$('#vatt-slider-range .ui-slider-handle:last').attr('after-content', ui.values[ 1 ]  + " Вт");
    	$('.vatt-min').val( ui.values[ 0 ] );
    	$('.vatt-max').val( ui.values[ 1 ] );


      }
    });

    $('#vatt-slider-range .ui-slider-handle:first').addClass('first').attr('after-content', $( "#vatt-slider-range" ).slider( "values", 0 ) + " Вт");
    $('#vatt-slider-range .ui-slider-handle:last').addClass('last').attr('after-content', $( "#vatt-slider-range" ).slider( "values", 1 ) + " Вт");

    $('.vatt-min').change(function(){
   		$("#vatt-slider-range").slider('values',0,$(this).val());
   		$('#vatt-slider-range .ui-slider-handle:first').attr('after-content', $(this).val() + " Вт");
    })

    $('.vatt-max').change(function(){
   		$("#vatt-slider-range").slider('values',1,$(this).val());
   		$('#vatt-slider-range .ui-slider-handle:last').attr('after-content', $(this).val() + " Вт");
    })

    // sliders 2
	$( "#vatt-2-slider-range" ).slider({
      range: true,
      min: 20,
      max: 95,
      values: [ filter_2_min, filter_2_max  ],
      slide: function( event, ui ) { // это функция которая вызывается по изменению слайда
        $('#vatt-2-slider-range .ui-slider-handle:first').attr('after-content', ui.values[ 0 ] + " Вт");
    	$('#vatt-2-slider-range .ui-slider-handle:last').attr('after-content', ui.values[ 1 ]  + " Вт");

    	$('.vatt-2-min').val( ui.values[ 0 ] );
    	$('.vatt-2-max').val( ui.values[ 1 ] );


      }
    });

    $('#vatt-2-slider-range .ui-slider-handle:first').addClass('first').attr('after-content', $( "#vatt-2-slider-range" ).slider( "values", 0 ) + " Вт");
    $('#vatt-2-slider-range .ui-slider-handle:last').addClass('last').attr('after-content', $( "#vatt-2-slider-range" ).slider( "values", 1 ) + " Вт");

    $('.vatt-2-min').change(function(){
   		$("#vatt-2-slider-range").slider('values',0,$(this).val());
   		$('#vatt-2-slider-range .ui-slider-handle:first').attr('after-content', $(this).val() + " Вт");
    })

    $('.vatt-2-max').change(function(){
   		$("#vatt-2-slider-range").slider('values',1,$(this).val());
   		$('#vatt-2-slider-range .ui-slider-handle:last').attr('after-content', $(this).val() + " Вт");
    })

    $('.telephone-mask').mask("?+?7(999) 999-9999");


    $(document).keydown(function(eventObject){
		if( eventObject.which == 27){
			if( $('.overlay').hasClass('active') ){
				$('.pop-up-wrapper').removeClass('active');
				$('body, html').css('overflow', 'auto');
				$('.overlay').removeClass('active');
			}
		}
	});

	$('.clear-filter').on('click', function(){
		$("#vatt-slider-range").slider('values',0, filter_min);
		$("#vatt-slider-range").slider('values',1, filter_max);
		$('#vatt-slider-range .ui-slider-handle:first').attr('after-content', filter_min + " Вт");
		$('#vatt-slider-range .ui-slider-handle:last').attr('after-content', filter_max + " Вт");

		$("#vatt-2-slider-range").slider('values',0, filter_2_min);
		$("#vatt-2-slider-range").slider('values',1, filter_2_max);
		$('#vatt-2-slider-range .ui-slider-handle:first').attr('after-content', filter_min + " Вт");
		$('#vatt-2-slider-range .ui-slider-handle:last').attr('after-content', filter_max + " Вт");
	})

    // add catalg itme when scroll

  

		$(window).scroll(function () {
		   
			if ($(this).scrollTop() > ( $('.catalog-bottom').offset().top - $(this).height() ) ) {
				$('.catalog-container').append("<article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article><article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article><article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article>");
			}

		});


});