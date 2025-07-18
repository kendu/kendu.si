//(function($) {
$(document).ready(function(){
  
    var App = {
 
    /**
    * Init Function
    */
    init: function() {
        App.HomeOpacity();
        App.setHeight();
        App.ScrollToContact();
        App.ScrollBack();
        App.Preloader();
        App.Animations();
        App.Lightbox();
        App.QTRotator();
        App.ContactForm();
        App.VideoFitVid();
        App.ProjectImageCarousel();
        App.ProjectImageViewer();
    },
 
    /**
    * Home Opacity
    */
 
 
    HomeOpacity: function() {
    "use strict"; 
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#home').css('opacity', (1-st/h) );
        });
    },


    setHeight: function() {
    navbarheight = $("#nav_bar").outerHeight()+1;
    width = window.innerWidth;
    },
 
 
    /**
    * Scroll To
    */
    ScrollToContact: function() {
    $('#home_arrow').click(function () {$.scrollTo('#services',1000,{easing:'easeInOutExpo',offset:-navbarheight+1,'axis':'y'});});
    $('#logo').click(function () {$.scrollTo('#home',1000,{easing:'easeInOutExpo',offset:-navbarheight,'axis':'y'}); return false});      
 
    var lastId,
    topMenu = $('#navigation, #mobile_menu_content');
    menuItems = topMenu.find('a');
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
 
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+2;
        $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
 
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+navbarheight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
                                if ($(this).offset().top < fromTop)
                                return this;
                                });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    },
 
 
 
    /**
    * Scroll Back
    */
    ScrollBack: function() {
    "use strict";
        $('#arrow_back').click(function () {
            $.scrollTo('#home',1500,{easing:'easeInOutExpo',offset:0,'axis':'y'});
        });
    },
 
 
    /**
    * Preloader
    */
    Preloader: function() {
    "use strict";
        $(window).load(function() {
            $('#status').delay(100).fadeOut('slow');
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({'overflow':'visible'});
        })
    },



    /**
    * Animations
    */
    Animations: function() {
    "use strict";
    var windowwidth=$(window).width();
    if (windowwidth > 1024) {
    	
        $('#nav_bar').waypoint(function() {
            setTimeout(function(){$('.logo').addClass('animated fadeInDown')},600);
            setTimeout(function(){$('#navigation').addClass('animated fadeInDown')},800);
            setTimeout(function(){$('#slogan_h1').addClass('animated fadeInDown')},1000);
            setTimeout(function(){$('#slogan_h3').addClass('animated fadeInDown')},1200);
        }, { offset: 0 });
 
        $('#about').waypoint(function() {
            setTimeout(function(){$('#about_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#about_icon1').addClass('animated fadeInDown')},200);
            setTimeout(function(){$('#about_icon2').addClass('animated fadeInDown')},400);
            setTimeout(function(){$('#about_icon3').addClass('animated fadeInDown')},600);
        }, { offset: '50%' });
 
        $('#team').waypoint(function() {
            setTimeout(function(){$('#team_intro').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('#team_slider').addClass('animated fadeInUp')},200);
        }, { offset: '50%' });
        
        $('#crew').waypoint(function() {
            setTimeout(function(){$('#crew_intro').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('#crew_members').addClass('animated fadeInUp')},0);
        }, { offset: '100%' });
        
        $('#portfolio_subpage').waypoint(function() {
            setTimeout(function(){$('#portfolio_item_icons_top').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('#portfolio_item_title').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('#portfolio_item_details').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('#portfolio_item_icons_bottom').addClass('animated fadeInUp')},1200);
        }, { offset: 0 });
        
        $('#portfolio_subpage1').waypoint(function() {
            setTimeout(function(){$('#portfolio_item_icons_top').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('#portfolio_item_title').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('#portfolio_item_details').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('#portfolio_item_icons_bottom').addClass('animated fadeInUp')},1200);
        }, { offset: 0 });
        
        $('#services').waypoint(function() {
            setTimeout(function(){$('#services_intro').addClass('animated fadeInUp')},0);
        }, { offset: '50%' });
        $('#service1').waypoint(function() {
            setTimeout(function(){$('#services_column_right').addClass('animated fadeInRight')},0);
            setTimeout(function(){$('#services1').addClass('animated fadeInLeft')},0);
            setTimeout(function(){$('#services2').addClass('animated fadeInRight')},0);
            setTimeout(function(){$('#services2b_image').addClass('animated fadeInRight')},200);
        }, { offset: '100%' }); 
        $('#service2').waypoint(function() {
            setTimeout(function(){$('#services3').addClass('animated fadeInLeft')},0);
            setTimeout(function(){$('#services4').addClass('animated fadeInRight')},0);
        }, { offset: '100%' });
        $('#service3').waypoint(function() {
            setTimeout(function(){$('#own_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#services5').addClass('animated fadeInLeft')},0);
            setTimeout(function(){$('#services6').addClass('animated fadeInRight')},0);
        }, { offset: '100%' });
        $('#jobs').waypoint(function() {
            setTimeout(function(){$('#jobs_intro').addClass('animated fadeInUp')},0);
        }, { offset: '70%' });
        $('#news').waypoint(function() {
            setTimeout(function(){$('#news_intro').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('#news1').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('#news2').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('#news3').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('#more_posts').addClass('animated fadeInUp')},800);
        }, { offset: '70%' });
        $('#contact').waypoint(function() {
            setTimeout(function(){$('#contact_form').addClass('animated fadeInLeft')},0);
            setTimeout(function(){$('#contact_info').addClass('animated fadeInRight')},200);
        }, { offset: '70%' });
		}
    },


    /**
    * Carousel
    */
    Carousel: function() {
     "use strict";
        $('#owl-gallery').owlCarousel({
            items : 5,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
    },

    /**
    * Nivo Lightbox
    */
    Lightbox: function() {
     "use strict";
        $('.play_icon a').nivoLightbox({
            effect: 'fall',                             // The effect to use when showing the lightbox
        });
    },
 


 
    /**
    * VideoBG
    */
    VideoBG: function() {
    'use strict';
    var windowwidth=$(window).width();
    if (windowwidth > 1024) {
	    $('.player').mb_YTPlayer();}
    },

    /**
    * Parallax
    */
    Stellar: function() {
     "use strict";
    $.stellar();
    },
 
    /**
    * Testimonials Rotator
    */
    QTRotator: function() {
     "use strict";
    $( '#cbp-qtrotator' ).cbpQTRotator({
        speed : 700,
        easing : 'ease',
        interval : 6000
        });
    },
 
    /**
    * Contact Form
    */
    ContactForm: function() {
     "use strict";
    var options = {target: "#alert"}
    $("#contact-form").ajaxForm(options);
    },

    /**
    * Video Fit Vid
    */
    VideoFitVid: function() {
     "use strict";
    $(".video").fitVids();
    },

    /**
    * Project Image Carousel
    */
    ProjectImageCarousel: function() {
        "use strict";
        $('.project__images').owlCarousel({
            center: true,
            stagePadding: 70,
            items:1,
            lazyLoad:true,
            nav:false,
            loop:false,
            margin:5
        });
    },

    /**
    * Project Image Viewer
    */
    ProjectImageViewer: function() {
        "use strict";
        $('.project__images').viewer({
            toolbar: true,
            zIndex: 999,
            url: 'data-original',
            title: false,
            navbar: false
        });
    },
 
 }

$(function() {
  App.init();
  
  $(window).resize(App.setHeight);
  
  });


 
 
 
 
}); 

//})(jQuery);