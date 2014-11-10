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


	// sliders 1
	$( "#vatt-slider-range" ).slider({
      range: true,
      min: 2,
      max: 12,
      values: [ 4, 10 ],
      slide: function( event, ui ) {
        $('#vatt-slider-range .ui-slider-handle:first').attr('after-content', ui.values[ 0 ] + " Вт");
    	$('#vatt-slider-range .ui-slider-handle:last').attr('after-content', ui.values[ 1 ]  + " Вт");

    	$('.vatt-min').val( ui.values[ 0 ] );
    	$('.vatt-max').val( ui.values[ 1 ] );


      }
    });

    $('#vatt-slider-range .ui-slider-handle:first').addClass('first').attr('after-content', $( "#vatt-slider-range" ).slider( "values", 0 ) + " Вт");
    $('#vatt-slider-range .ui-slider-handle:last').addClass('last').attr('after-content', $( "#vatt-slider-range" ).slider( "values", 1 ) + " Вт");

    // sliders 2
	$( "#vatt-2-slider-range" ).slider({
      range: true,
      min: 20,
      max: 95,
      values: [ 30, 80 ],
      slide: function( event, ui ) {
        $('#vatt-2-slider-range .ui-slider-handle:first').attr('after-content', ui.values[ 0 ] + " Вт");
    	$('#vatt-2-slider-range .ui-slider-handle:last').attr('after-content', ui.values[ 1 ]  + " Вт");

    	$('.vatt-2-min').val( ui.values[ 0 ] );
    	$('.vatt-2-max').val( ui.values[ 1 ] );


      }
    });

    $('#vatt-2-slider-range .ui-slider-handle:first').addClass('first').attr('after-content', $( "#vatt-2-slider-range" ).slider( "values", 0 ) + " Вт");
    $('#vatt-2-slider-range .ui-slider-handle:last').addClass('last').attr('after-content', $( "#vatt-2-slider-range" ).slider( "values", 1 ) + " Вт");


    $('.telephone-mask').mask("?+?7(999) 999-9999");


    // add catalg itme when scroll

  

		$(window).scroll(function () {
		   
			if ($(this).scrollTop() > ( $('.catalog-bottom').offset().top - $(this).height() ) ) {
				$('.catalog-container').append("<article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article><article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article><article class='catalog-item col s-4 add-new'>	<a href='#'> <div class='image'><div class='labels'><div class='new'> </div><div class='decor'> </div></div><div class='cell'><img src='img/catalog-tovar.jpg' alt='' /></div></div><div class='colored-block blue'><p>Светодиодная лампа</p><p>E27 7 Вт</p></div><div class='technik row'><div class='col s-8 inbox name colored-block'><p>Мощность аналога</p><p>Световой поток</p><p>Цветовая температура</p><p>Напряжение</p></div><div class='col s-4 inbox value colored-block'><p>50Вт</p><p>510 Lm</p><p>2700K</p><p>230V</p></div></div> </a></article>");
			}

		});


});