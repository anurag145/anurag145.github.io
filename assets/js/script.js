$(document).ready(function(){

    // Partner slider
        $('#partner-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }) // end of #partner-slider




    // Turn off Google Map zooming
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function () {
            $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });
        // you want to disable pointer events when the mouse leave the canvas area;
        $(".map_canvas").mouseleave(function () {
            $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        }); //end of Turn off Google Map zooming


    // Team box height
        var h = $('.team-img-detail').height();
        var mbottom = h;
        h = h/2;
        var top = $('.team-box').height();
        top = (top/2)-h;
        var win = $(window).width();

        if ( win >= 768 ){
            $(".team-img-detail").css("top", top);
        } else {
            $(".team-img-detail").css({
                "bottom": -mbottom+20,
                "left": "0",
                "width": "100%"
            });
            $(".team-box").css("margin-bottom", mbottom+30);
        }// end of Team box height


    // Pop up
        $('.test-popup-link').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        }); //end of Pop Up

        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
        });

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    
 //   if ($(".filter-button").removeClass("active")) {
//$(this).removeClass("active");
//}
//$(this).addClass("active");

});

}); // end of $(document).ready(function()