'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel init
  $(".owl-carousel[data-type='common']").owlCarousel({
  	items: 4,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	],
  	responsive: {
  		992: {
        items: 4,
      },
      
      768: {
      	items: 3,
      },
      
      550: {
      	items: 2,
      },

      0: {
      	items: 1,
      }
  	}
  });

  // dropdown toggle
  if( $('.dropdown').length ) {
    $('.dropdown').append('<div class="dropdown__button"></div')
    
    $('.dropdown__button').on('click', function(e) {
      e.preventDefault();
      var $dropdown = $(this).closest('.dropdown');
      $dropdown.toggleClass('dropdown_open');
    });
  }



  // next script
  make_custom_select('.form-search__select', 'select-custom');

});


//
function make_custom_select(select, el) {
  var $select = $(select);

  $select.wrap("<div class='" + el + "'></div>");
  $select.hide();

  var $el = $('.' + el);

  $el.append('<div class="'+ el + '__selected"></div><div class="'+ el + '__list"></div>');
  
  $select.children().each(function() {
    var index = $(this).val();
    $('.' + el + '__list').append('<div class="'+ el + '__item" data-id="'+index+'">' + $(this).text() + '</div>');
  });
  
  $('.' + el + '__selected').html($('.' + el + '__item').first().html());  
  
  $(document).on('click', '.' + el, function (e) {
    e.preventDefault();
    $('.' + el + '__list').slideToggle();
  });

  $(document).on('click', '.' + el + '__item', function (e) {
    $('.' + el + '__selected').html($(this).html());
  });

}

