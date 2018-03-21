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
    loop: true,
    // autoWidth: true,
    margin: 10,
    // rewind: false,
  	smartSpeed: 1000,
  	nav: true,
  	navText: [
  		"<i class='icon icon-arrow_slider owl-nav_arrow'></span>",
  		"<i class='icon icon-arrow_slider owl-nav_arrow'></span>"
  	],
    responsive: {
      640: {
        items: 2
      },

      0: {
        center: false,
        items: 1
      }
    }
  }).on('translate.owl.carousel', function (e) {
      $(".slider_main").find('.owl-item').removeClass('mini');
  }).on('translated.owl.carousel', function (e) {
    if( $(window).width() > 992 ) {
      $(".slider_main").find('.owl-item').addClass('mini');
      $(".slider_main").find('.owl-item.center').removeClass('mini');
    }
  });

  // categoriy_new on main
  $('.category_new .category__carousel').owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    rewind: false,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ],
    responsive: {
      1200: {
        items: 5
      },
      768: {
        items: 4
      },
      640: {
        items: 3
      },
      480: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  })

  // categoriy_sale on main
  $('.category_sale .category__carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    rewind: false,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ],
    responsive: {
      1200: {
        items: 6
      },
      992: {
        items: 5
      },
      768: {
        items: 4
      },
      640: {
        items: 3
      },
      480: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  })
  
  // categoriy_sale on main
  $('.blog-item__carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    rewind: false,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ],
    responsive: {
      1200: {
        items: 3
      },
      992: {
        items: 2
      },
      768: {
        items: 3
      },
      0: {
        items: 1
      }
    }
  })

  // categoriy_sale on main
  $('.article__carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    rewind: false,
    smartSpeed: 1000,
    nav: true,
    navText: [
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>",
      "<i class='icon icon-arrow_go owl-nav_arrow'></span>"
    ],
    responsive: {
      1200: {
        items: 6
      },
      992: {
        items: 5
      },
      768: {
        items: 4
      },
      640: {
        items: 3
      },
      480: {
        items: 2
      },
      0: {
        items: 1
      }
    }
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
    {
      select: '.catalog-sort__select',
      el: 'catalog-sort__select-custom' 
    },
  ]);

  // custom scroll bar brands
  var lists_simplebars = [
    '.brands-list',
    '.filter-list'
  ];

  lists_simplebars.forEach(function(list_collection) {
    if( $(list_collection).length ) {
      $(list_collection).each(function() {
        new SimpleBar($(this)[0], { 
          autoHide: false
        });
      })
    }
  });


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
  $(".product-button__buy, .hotlinks-link_basket, .catalog-body-open_filters").fancybox({
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

  // generate alphabet
  if( $('.filter-alfabet__item').length ) {
    $('.filter-alfabet__item').each(function() {
      var $this = $(this),
          $list = $this.parent();

      generate_alfabet($this, $list);
    });
  }

  // Wrap|unwrap filter group
  $('.filter-title').on('click', function(e) {
    e.preventDefault();
    var $this = $(this),
        $inner = $this.siblings('.filter__inner');

    $inner.slideToggle();
    $this.find('.icon').toggleClass('icon-plus icon-minus');
  });

  // Switch filters
  $('.filter-input').on('change', function(e) {
    var $this = $(this),
        $filter_reset = $('.catalog-body-filter.reset'),
        $catalog_body_filter = $('.catalog-body-filter'),
        $label = $this.closest('.filter-label'),
        $name = $this.siblings('.filter-label__text').find('.filter-label__name span');
    
    $label.toggleClass('active');
    
    if( $this.is(':checked') ) {
      var $filter = $('<a href="#" class="catalog-body-filter">'+ $name.text() +'</a>');
      $filter_reset.before($filter);
      $filter_reset.show();
    } else {
      $('.catalog-body-filter').not('.reset').each(function() {
        if( $(this).text() == $name.text() ) {
          $(this).remove();
        }
      })

      if( !$('.catalog-body-filter').not('.reset').length ) {
        $filter_reset.hide();
      }

    }

  });


  // Reset filters
  $('.catalog-body-filter.reset').on('click', function(e) {
    e.preventDefault();

    $('.catalog-body-filter').not('.reset').each(function() {
      $(this).remove();
    });

    $('.filter-label.active').click();

    $(this).hide();

    $('html, body').animate({
      scrollTop: 0
    }, 0);
  })


  // toggle header catalogs
  $('.header-catalog-all').on('click', function(e) {
    e.preventDefault();

    $('.header-catalog-dropdown').slideToggle();
  });

  // toggle submenues in catalog dropdown
  $('.header-catalog-dropdown .header-catalog-link').on('click', function(e) {
    e.preventDefault();

    $(this).parent().toggleClass('open').end().siblings('.sublist').slideToggle();
  });


  // burger toggle menu
  $(document).on('click', '.burger', function(e) {
    var $this = $(this),
        $menu = $('.menu'),
        $burger = $menu.children('.burger');

    $menu.toggleClass('show');

  });


  // show|hide filters on mobile
  $(document).on('click', '.catalog-body-open_filters', function(e) {
    e.preventDefault();


  })

  // windows resize
  $(window).resize(function() {
    var width = $(this).outerWidth();

    if( width >= 992 ) {
      $.fancybox.close();
      $('.catalog .catalog-filters').show();
    } else {
      $('.catalog .catalog-filters').hide();
    }
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

function generate_alfabet($this, $list) {
  // console.log(String.fromCharCode(1040, 1071));
  var alfabets = [
        {
          start: 65,
          end: 90
        },
        {
          start: 1040,
          end: 1071
        }
    ];

  alfabets.forEach(function(lang) {
    for( var i = lang.start; i <= lang.end; i++ ) {
      var $item = $this.clone();
      $item.text(String.fromCharCode(i));
      $list.append($item);
    }
  });

  $this.detach();
}