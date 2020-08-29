$(document).ready(function () {
	function hex_initial_animation() {
		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
		$(".hex-wrap").velocity("callout.pulse");
		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
		}
	hex_initial_animation();

var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
function hovernotify() {
    $(".hover-notify").velocity("callout.tada");
}
function myStopFunction() {
$(".hover-notify").velocity('stop', true).velocity("fadeOut");
    clearInterval(hoverdetect);
}

		$(".hex-init").mouseenter(function () {

			myStopFunction();

			var title_color =  $(this).parent().attr("data-color");
			var title_name = $(this).parent().attr("data-title");
			var desc_name = $(this).parent().attr("data-content");

				function hex_description() {
					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
					$('.' + desc_name).siblings().removeClass('desc-active');
						setTimeout(function() {
							$('.' + desc_name).addClass('desc-active');
							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
							$('.code-title').text(title_name)
						}, 0);
			    }
			    hex_description();

				$(this).parent().addClass('hexactive');
				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

			}).mouseleave(function () {
				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
			});
});

function mob_display(x) {
  if (x.matches) { // If media query matches
    $('.container-1').css({
        'display': 'block'
    });
    $('.intro').css({
        'display': 'none'
    });
  }
  else {
    $('.container-1').css({
        'display': 'none'
    });
    $('.intro').css({
        'display': 'block'
    });
  }
}

var x = window.matchMedia("(max-width: 1300px)")
mob_display(x) // Call listener function at run time
x.addListener(mob_display) // Attach listener function on state changes



// $( document ).ready(function () {
//   function rescale(x) {
//   if (x.matches) { // If media query matches
//     $('#intro').css({
//         '-webkit-transform' : 'scale(0.5)',
//            '-moz-transform' : 'scale(0.5)',
//             '-ms-transform' : 'scale(0.5)',
//              '-o-transform' : 'scale(0.5)',
//                 'transform' : 'scale(0.5)'
//     });
//   }
// }});
//
// var x = window.matchMedia("(max-width: 576px)")
// rescale(x) // Call listener function at run time
// x.addListener(rescale) // Attach listener function on state changes
//
//
// function rescale2(y) {
//   if (y.matches) { // If media query matches
//     $('#intro').css({
//         '-webkit-transform' : 'scale(0.8)',
//            '-moz-transform' : 'scale(0.8)',
//             '-ms-transform' : 'scale(0.8)',
//              '-o-transform' : 'scale(0.8)',
//                 'transform' : 'scale(0.8)'
//     });
//   }
// }
//
// var y = window.matchMedia("(min-width: 768px)")
// rescale2(y) // Call listener function at run time
// y.addListener(rescale2) // Attach listener function on state changes
//
// function rescale3(z) {
//   if (z.matches) { // If media query matches
//     $('#intro').css({
//         '-webkit-transform' : 'scale(1)',
//            '-moz-transform' : 'scale(1)',
//             '-ms-transform' : 'scale(1)',
//              '-o-transform' : 'scale(1)',
//                 'transform' : 'scale(1)'
//     });
//   }
// }
//
// var z = window.matchMedia("(min-width: 991px)")
// rescale2(z) // Call listener function at run time
// z.addListener(rescale3) // Attach listener function on state changes
