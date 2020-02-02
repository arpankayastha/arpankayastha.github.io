/* =======================================================================================
* Author        : Robbee Labs
*
* Template Name : Alone Theme | Personal Resume/CV/Portfolio Html Template
*
* File          : Alone JS file
*
* Version       : 1.0
=========================================================================================*/

/* =======================================================================================

00. Preloader

01. Mobile Navigation

02. Header Sticky

03. Smoothscroll

04. Scroll Spy

05. Parallax Background

06. Animation Skills

07. Animate Number Fun Fact
	
08. Testimonial Carousel

09. Isotope Section Portfolio

10. Magnific Popup Portfolio

11. Initialize Google Map

12. Color Schemes

13. Ajax Contact Form js

=========================================================================================*/


(function($){
	"use strict";
    
    /*=========================================================================
        00. Preloader
    =========================================================================*/
    $(window).on('load', function(){
        $(".wrap-preloader").fadeOut(500); 
    });
    
    /*=========================================================================
        01. Mobile Navigation
    =========================================================================*/
    $('.mobile').on('click', function(e) {
        e.preventDefault();
        $('.menu').addClass('on');
    });
    
    $('.close_mob').on('click', function(e) {
        e.preventDefault();
        $('.menu').removeClass('on');
    });
    
    /*=========================================================================
        02. Header Sticky
    =========================================================================*/
    $(window).on('scroll', function () {
        var navScrollTop = $(this).scrollTop();
        if (navScrollTop > 300) {
            $('.header').addClass('header-fixed animated fadeInDown');
        } else {
            $('.header').removeClass('header-fixed animated fadeInDown');
        }
    });
    
    /*=========================================================================
        03. Smoothscroll
    =========================================================================*/
    $('a.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('.menu').removeClass('on');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
    });
    
    /*=========================================================================
        04. Scroll Spy
    =========================================================================*/
    var lastId,
        topMenu = $(".menu ul"),
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
            
        });

    menuItems.on('click',function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#intro" ? 0 : $(href).offset().top - 60;
        
        $('html, body').stop().animate({ 
            
            scrollTop: offsetTop
            
        }, 1000);
        e.preventDefault();
        
    });
    
    /*=========================================================================
        05. Parallax Background
    =========================================================================*/
    var parallax = $(window);
    parallax.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
    
    /*=========================================================================
        06. Animation Skills
    =========================================================================*/
    $(".services").waypoint(function(){
        $(".skill-bar-inner").css("width",function(){
            return $(this).parent().attr("data-progress")+"%"
        });
    });
    
    /*=========================================================================
        07. Animate Number Fun Fact
    =========================================================================*/
    $('.number').counterUp({ delay: 4, time: 1000 });
    
    
    /*=========================================================================
        08. Testimonial Carousel
    =========================================================================*/
    $('.owl-slides').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1000,
        items:1,
        smartSpeed:450
    });
    
    $(window).on('load resize', function() {
        
        /*=========================================================================
            09. Isotope Section Portfolio
        =========================================================================*/
        var worksfilters = $('.filters .filter'),
            worksitem = $('#isotope-grid');
        
		if (worksfilters != 'undefined'){
            
			worksitem.isotope({
                
				itemSelector : '.grid-item',
                layoutMode: 'sloppyMasonry'
                
			});
            
			worksfilters.on('click', function(){
                
				worksfilters.removeClass('active');
				$(this).addClass('active');
                
				var selector = $(this).attr('data-filter');
				worksitem.isotope({ filter: selector });
                
				return false;
                
			});
		}
        
        
        /*=========================================================================
            10. Magnific Popup Section Portfolio
        =========================================================================*/
        $('.modal-image').magnificPopup({
            type:'inline',
            fixedContentPos: false,
            removalDelay: 100,
            closeBtnInside: true,
            preloader: false,
            mainClass: 'mfp-fade'
        });
        
        
    });
    
    /*=========================================================================
        11. Initialize Google Map
    =========================================================================*/
    if($("#googlemap").length > 0){
        
        var myOptions = {
            
            zoom: 15,
            center: new google.maps.LatLng(-7.681902, 110.844028), //change the coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: false,
            styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
        };		 

        var map = new google.maps.Map(document.getElementById("googlemap"), myOptions);
        
        var marker = new google.maps.Marker({
            
                map: map,
                position: new google.maps.LatLng(-7.681902, 110.844028)  //change the coordinates
            
        });

        var infowindow = new google.maps.InfoWindow({
            
                content: "<div style='color:#222'><b>Robbee Labs</b><br/>Nr. 6, 21 Tamansari Karanganyar<br/> Kerjo</div>"  //change your address
            
        });

        google.maps.event.addListener(marker, "click", function () {
            
            infowindow.open(map, marker);
            
        });
        
        infowindow.open(map, marker);
        
    }
        
    /*=========================================================================
        12. Color Schemes
    =========================================================================*/
    $(".box-options .options").on('click', function(e) {
        $(".box-options").toggleClass('show');
        return false;
    });

    $(".color-options li a.color").on('click', function(e) {
        e.preventDefault();
        $("link#theme").attr("href",$(this).attr('href'));
        return false;
    });
    
    /*=========================================================================
        13. Ajax Contact Form js
    =========================================================================*/
    // init the validator
    $('#contactForm').validator();

    // when the form is submitted
    $('#contactForm').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = $(this).attr('action');

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data){
                    
                    if(data === 'success'){
                        $('.message-success').fadeIn();
                        $('#contactForm')[0].reset();
                    }else{
                        $('.message-error').fadeIn();
                    }
                    

                }
            });
            return false;
        }
    });

    
}(jQuery));