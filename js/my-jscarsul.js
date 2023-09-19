$(document).ready(function () {
    

    initialize_owl($('#auction_owl1'));

    $('a[href="#live"]').on('shown.bs.tab', function () {
        initialize_owl($('#auction_owl1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#auction_owl1'));
    });

    $('a[href="#coming"]').on('shown.bs.tab', function () {
        initialize_owl($('#auction_owl2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#auction_owl2'));
    });

    

});
var rtl = false;
    if($("html").attr("lang") == 'ar'){
        rtl = true;
    }
function initialize_owl(el) {
    el.owlCarousel({
            loop:true,
            dots:true,
            nav:false,
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
                    items:1,
                    stagePadding: 150,
                },
                992:{
                    items:1,
                    stagePadding: 100,
                },
                1200:{
                    items:1,
                    stagePadding: 150,
                },
                1300:{
                    items:1,
                    stagePadding: 180,
                },
                1800:{
                    items:2,
                    stagePadding: 50,
                }

            },
            autoplay:false
    });
}
function destroy_owl(el) {
    el.owlCarousel('destroy');
}