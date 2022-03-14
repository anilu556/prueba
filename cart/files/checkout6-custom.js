/** 
	=================================================
 	 * Theme Name: Layout - Aldoconti
 	 * Company: Corebiz
 	 * Author: Carlos Rodriguez Suarez 
	=================================================
**/

$(function(){
  
  	//Loadlbar
	$(window).on("load", function() {
		$("#preloader").fadeOut(1500)
	});
  
    $('.slide-trigger').on('click', function(e){
			//console.log('click submenu');
			if($(window).innerWidth() <= 1024){
				e.preventDefault()
				// Remove class active from siblings
				$(this).parent().siblings().find('.slide-trigger--active').removeClass('slide-trigger--active');
				// .slide-trigger
				$(this).addClass('slide-trigger--active');
				$(this).next().slideToggle('fast');
				// <ul.genres-categories>
				$(this).parent().siblings().find('.slide-collapse').slideUp();
				return false;
			}
		});

        var goToTop = function () {

        var handle = function () {
        var currentWindowPosition = $(window).scrollTop(); // current vertical position
            if (currentWindowPosition > 300) {
                $('.go-to-top').fadeIn();
            } else {
                $('.go-to-top').fadeOut();
            }
        };

        return {
            init: function () {
            handle(); // call headerFix() when the page was loaded
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                $(window).bind("touchend touchcancel touchleave", function (e) {
                    handle();
                })

                $('body').addClass('iphone');
            } else {
                $(window).scroll(function () {
                    handle();
                })
            }

            $('.go-to-top').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 600);
            })
        }};
    }();

    goToTop.init();
});
  
function renderHeaderView() {
    $(".header-breadcrumb-active").removeClass("header-breadcrumb-active") 
    $(".header-breadcrumb-link").removeClass("header-breadcrumb-link");
    var e = window.location.hash,
        r = window.location.href,
        a = 0;
    $(".header-breadcrumb div").each(function() {
      	"" != $(this).attr("class") && null != $(this).attr("class") || ("#/cart" == e && 0 == a && $(this).addClass("header-breadcrumb-active"), "#/email" == e && 1 == a && ($($(".header-breadcrumb div")[0]).addClass("header-breadcrumb-link"),
                                                                                                                                                                               $(this).addClass("header-breadcrumb-active")), "#/profile" != e && "#/shipping" != e && "#/payment" != e || 2 != a || ($($(".header-breadcrumb div")[0]).addClass("header-breadcrumb-link"), $(this).addClass("header-breadcrumb-active")), -1 != r.indexOf("orderPlaced") && 3 == a && $(this).addClass("header-breadcrumb-active"), a++)
    }), 
    
    $(".header-breadcrumb-link").on("click", function() {
          window.location.href = "/checkout/#/cart"
    })
}
  
$(document).ready(function() {
    renderHeaderView();
})
  
window.addEventListener("hashchange", function() {
    renderHeaderView()
})