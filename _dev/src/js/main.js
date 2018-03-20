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
  make_custom_select([
    {
      select: '.form-search__select',
      el: 'select-custom' 
    },
    {
      select: '.product-colors__select',
      el: 'product-colors__select-custom' 
    },
    {
      select: '.chekout-delivery__select',
      el: 'chekout-delivery__select-custom' 
    },
    {
      select: '.chekout-payment__select',
      el: 'chekout-payment__select-custom' 
    },
  ]);

  // custom scroll bar brands
  if( $('.brands-list').length ) {
    new SimpleBar(document.querySelector('.brands-list'), { 
      autoHide: false
    });
  }

  // switch tabs in cabinet
  if( $('.cabinet').length ) {
    var $tab_active = $($('.cabinet__switch-button.active').attr('href'));

    $tab_active.show();

    $('.cabinet__switch-button').on('click', function(e) {
      e.preventDefault();

      var $this = $(this),
          $tab = $($this.attr('href'));

      $this.addClass('active').siblings().removeClass('active');
      $('.cabinet__tab').hide();
      $tab.show();
    })
  }


  // carousel product more photos
  $('.jcarousel').jcarousel({
      // vertical: true
    });

    $('.jcarousel-nav_prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-nav_next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.jcarousel-pagination').jcarouselPagination({
      'perPage': 1,
      item: function(page) {
        return '<a href="#' + page + '"></a>';
      }
    })
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .jcarouselPagination('reload');

  // select product more photo
  $('.product-photos-more__img-holder').on('click', function() {
    var $this = $(this),
        src = $this.children('img').attr('src');

    $('.product-photos-main__img').attr('src', src);
    $this.addClass('active').siblings().removeClass('active');
  });

  // open fancybox product photos
  $('.product-photos-main__img-holder').on('click', function (e) {
    e.preventDefault();
    open_fancy();
  });

  // open cart
  $(".product-button__buy").fancybox({
    fitToView : false,
    autoSize  : false,
    closeClick  : false,
    width: '100%',
    maxWidth: 900,
    height: 'auto',
    openEffect  : 'fade',
    closeEffect : 'fade',
    openSpeed: 500,
    scrolling: 'no',
    wrapCSS: 'cart-popup'
  });

  $('.cart__close').click(function() {
    $.fancybox.close();
  });

  // change product amount
  $('.product-amount-changer__btn').on('click', function() {
    var $this = $(this),
        action = $this.data('action'),
        $input = $this.siblings('.product-amount-changer__input'),
        val = parseInt($input.val());

    if ( action == '+' ) {
      val++;
    } else {
      val--;
    }

    if( val < 1 ) {
      val = 1;
    }

    $input.val(val)

  });

  // select product size
  $('.product-size').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // next script

});


// open fancybox with product photos
function open_fancy() {
  var sources = [],
    index_num = $('.product-photos-more__img-holder.active').data('index'),
    $product_photos_img = $('.product-photos-more__img-holder').children('img');

  if ($product_photos_img.length > 0) {
    $product_photos_img.each(function (i, item) {
      var $item = $(item),
        src = $item.attr('src');
      sources.push(src);
      // sources.push(src.replace('_s' , ''));
    });
  } else {
    sources.push($('.product-photos-main__img').attr('src'));
    index_num = 0;
  }

  $.fancybox.open(sources,
    {
      maxWidth: 800,
      index: index_num,
      prevEffect: 'fade',
      nextEffect: 'fade'
    }
  )
}


//
function make_custom_select(collections) {

  collections.forEach(function(collection) {

    var $select = $(collection.select),
        el = collection.el;

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
      e.stopPropagation();
      $('.' + el + '__list').slideToggle();
      $('.' + el).toggleClass('show');
      $('[class*="select-custom"]').not('.' + el).removeClass('show');
      $('[class*="select-custom"] [class*="__list"]').not('.' + el + '__list').slideUp();
    });  

    $(document).on('click', function () {
      if( $('.' + el).hasClass('show') ) {
        $('.' + el + '__list').slideUp();
        $('.' + el).removeClass('show');
      }
    });

    $(document).on('click', '.' + el + '__item', function (e) {
      $('.' + el + '__selected').html($(this).html());
    });
  });
}

