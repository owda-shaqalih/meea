$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});
$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
        rtl = true;
    }
   //  $(".dropdown_sort a").click(function(){

   //      $(".btn_filter:first-child").text($(this).text());
   //      $(".btn_filter:first-child").val($(this).text());
      
   //      $('.dropdown_sort').removeClass('show');
   //      $('.filter_sort').removeClass('show');
   //      return false;
   // });
    
    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

    /*header-fixed*/
    $(window).scroll(function(){
            
        if ($(window).scrollTop() >= 200) {
            $('body').addClass('fixed-header');
        }
        else {
            $('body').removeClass('fixed-header');
        }
              
    });

    $('.main_menu a[href^="#"],.menu_xs a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-85 }, 1000);
      $('body,html').removeClass('menu-toggle');
        
      $('.menu-trigger').removeClass('active');
      return false;
    });

    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });
    
    $("#home_slider").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        items:1,
        dots:true,
        nav:true,
        rtl:rtl,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-left"></i>',
            '<i class="fal fa-long-arrow-right"></i>'],

    })

    $(".single_slide").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        items:1,
        dots:true,
        rtl:rtl,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-left"></i>',
            '<i class="fal fa-long-arrow-right"></i>'],

    })


    $("#marker_slidr").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        items:1,
        dots:true,
        rtl:rtl,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-left"></i>',
            '<i class="fal fa-long-arrow-right"></i>'],

    })

	$("#Locations_slider").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                stagePadding: 0,
            },
            575:{
                items:1,
                stagePadding: 50,
            },
            768:{
                items:2,
                stagePadding: 50,
            },
            992:{
                items:2,
                stagePadding: 100,
            },
            1200:{
                items:3,
                stagePadding: 50,
            }

        },
        dots:true,
        nav:false,
        autoplay:false,

    })

    $("#other_products").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }

        },
        dots:false,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-left"></i>',
            '<i class="fal fa-long-arrow-right"></i>'],

    })
    
    $("#tips_slide").owlCarousel({
            loop:false,
            margin:0,
            responsiveClass:true,
            items:1,
            dots:true,
            rtl:rtl,
            nav:true,
            autoplay:false,
            navText:['<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],

        })

    
    /*Decrease & Increase*/    
        var minimum_quanitiy=$(".jsQuantityDecrease").attr("minimum"),
        productQuantity=minimum_quanitiy;
        $(document).on("click",".jsQuantityDecrease",function(){
            var quantity = $(this).parent().find('input[name="count-quat1"]').val();
            quantity = quantity * 1;
            var newQuantity = quantity - 1;
            $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
            if (newQuantity <2) {
                $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
                $(this).closest('.product_item_box').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

            } else{
                 $(this).parent().find(".jsQuantityDecrease").removeClass("disabled").removeClass("removeQuantity");
                 $(this).closest('.product_item_box').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

            }
        }),

        $(document).on("click",".jsQuantityIncrease",function(){
            var quantity = $(this).parent().find('input[name="count-quat1"]').val();
            quantity = quantity * 1;
            var newQuantity = quantity + 1;
            $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
            if (newQuantity >=2) {
                $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
                $(this).closest('.product_item_box').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

            } else{
                 $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
                 $(this).closest('.product_item_box').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

            }
            
        })
    
})