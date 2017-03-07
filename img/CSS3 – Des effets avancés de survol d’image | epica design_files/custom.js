/* EPICA DESIGN OFFICIAL SITE JS SCRIPT
 * author : epicadesign
 * author url : http://epicadesign.fr
*/
jQuery(function( $ ) {
/* ====== Custom WP Contact Form 7 Plugins ===== */
$('.wpcf7-form-control').addClass('form-control');

/* ====== bbpress subscription toogle ===== */
$('.subscription-toggle').addClass('button');

/* ====== Adapt submit button ===== */
$('input[type=submit]').addClass('button');
/* ====== Adapt select field ===== */
$('select').addClass('form-control');
/* ====== Adapt woocommerce field ===== */
$('.woocommerce input[type="text"]').addClass('form-control');
$('.woocommerce .digital-downloads a').addClass('button digital-product');

		
/* ====== Search box toggle ===== */
$('#nav-search').on('click', function() {
	$(this).toggleClass('show hidden');
	$(this).removeClass('animated flipInX');
	$("#nav-search-close").toggleClass('show hidden');
	$("#searchform").toggleClass('show hidden animated flipInX');
	return false;
});

$('#nav-search-close').on('click', function() {
	$(this).toggleClass('show hidden');
	$("#nav-search").toggleClass('show hidden animated flipInX');
	$("#searchform").toggleClass('show hidden animated flipInX');
	return false;
});

/* ===== Lost password form ===== */
$('.pwd-lost > .pwd-lost-q > a').on('click', function() {
	$(".pwd-lost > .pwd-lost-q").toggleClass("show hidden");
	$(".pwd-lost > .pwd-lost-f").toggleClass("hidden show animated fadeIn");
	return false;
});
/* ====== Active prettyphoto ===== */

/* ====== Scroll to top ===== */
 "use strict";
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('.epctop').css({bottom:"25px"});
		} else {
			$('.epctop').css({bottom:"-100px"});
		}
	});
	$('.epctop').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});

/* ====== Animated Charts (use jquery.easypiechart.min.js) ===== */	/**/
/*$(document).ready(function() {
$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			size : 180,
			animate : 2000,
			lineWidth : 10,
			lineCap : 'square',
			lineWidth : 18,
			barColor : '#a8c60f',
			trackColor : 'rgba(160,160,160,0.4)',
			scaleColor : false,
			onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent)+'%');
			}
		});
});*/
			
/* ====== Animated Counter (use jquery.easypiechart.min.js) ===== */
function count($this){
			var current = parseInt($this.html(), 10);
			current = current + 1; 
		
			$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        
		
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
	});
/* ===== Active shortcode tabs ===== */
$('.servicetab li:first-child').addClass('active');
$('.servicetab .tab-content .tab-pane:first-child').addClass('active');

/* ====== Active animate in Scroll ===== */	
 $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
  
  var win = $(window);

var allMods = $(".epcanim");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("animated"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated"); 
    } 
  });
});


$("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

/**/
});
