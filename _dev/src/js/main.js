'use strict';

$(function () {

  // Smooth scroll
  Smooth_Scroll.init();
  
  // main slider
  var $slider_main = $(".slider_main");

  $slider_main.on('initialized.owl.carousel', function (e) {
    if( $(window).width() > 992 ) {
      $(".slider_main").find('.owl-item').addClass('mini');
      $(".slider_main").find('.owl-item.active').eq(0).removeClass('mini');
    }
  });

  $slider_main.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
  	smartSpeed: 1000,
  	nav: true,
  	navText: [
  		"<i class='icon icon-arrow_slider owl-nav_arrow'></span>",
  		"<i class='icon icon-arrow_slider owl-nav_arrow'></span>"
  	]
  }).on('translate.owl.carousel', function (e) {
      $(".slider_main").find('.owl-item').removeClass('mini');
  }).on('translated.owl.carousel', function (e) {
    if( $(window).width() > 992 ) {
      $(".slider_main").find('.owl-item').addClass('mini');
      $(".slider_main").find('.owl-item.active').eq(0).removeClass('mini');
    }
  });

  // categoriy_new on main
  $('.category_new .category__carousel').owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ]
  })

  // categoriy_sale on main
  $('.category_sale .category__carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ]
  })

  // dropdown toggle
  if( $('.dropdown').length ) {
    $('.dropdown').append('<div class="dropdown__button"></div')
    
    $('.dropdown__button').on('click', function(e) {
      e.preventDefault();
      var $dropdown = $(this).closest('.dropdown');
      $dropdown.toggleClass('dropdown_open');
    });
  }

  // custom select in search bar header
  make_custom_select('.form-search__select', 'select-custom');

  // custom scroll bar brands
  new SimpleBar(document.querySelector('.brands-list'), { 
    autoHide: false
  });

  // next script

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

