// $(function() {
//  $('#CD1').hover(function(){
//    $('#CD1').fadeTo("fast", 0);
//    $('#CDBack1').fadeTo("fast", 1);
//  }, function() {
//    $('#CD1').fadeTo("fast", 1);
//    $('#CDBack1').fadeTo("fast", 0);
//  });
// });


$(function() {
 $('.red').hover(function(){
    var ht = $(this).height()
    $('.green').height(ht)
   $('.red').fadeTo("fast", 0);
   $('.green').fadeTo("fast", 1);
 }, function() {
   $('.red').fadeTo("fast", 1);
   $('.green').fadeTo("fast", 0);
 });
});



$('#news1').hover(function() {
    $('.newstitle1').fadeTo("fast", 0);
	$('.content1').fadeTo("fast",1);
}, function() {
    $('.newstitle1').fadeTo("fast", 1);
	$('.content1').fadeTo("fast",0);
});

$('#news2').hover(function() {
    $('.newstitle2').fadeTo("fast", 0);
	$('.content2').fadeTo("fast",1);
}, function() {
    $('.newstitle2').fadeTo("fast", 1);
	$('.content2').fadeTo("fast",0);
});
$('#news3').hover(function() {
    $('.newstitle3').fadeTo("fast", 0);
	$('.content3').fadeTo("fast",1);
}, function() {
    $('.newstitle3').fadeTo("fast", 1);
	$('.content3').fadeTo("fast",0);
});




$('#show').hover(function() {
    $('.img1').fadeTo("fast", 0);
	$('.list1').fadeTo("fast",1);
}, function() {
    $('.img1').fadeTo("fast", 1);
	$('.list1').fadeTo("fast",0);
});

$('#show2').hover(function() {
    $('.img2').fadeTo("fast", 0);
	$('.list2').fadeTo("fast",1);
}, function() {
    $('.img2').fadeTo("fast", 1);
	$('.list2').fadeTo("fast",0);
});
$('#show3').hover(function() {
    $('.img3').fadeTo("fast", 0);
	$('.list3').fadeTo("fast",1);
}, function() {
    $('.img3').fadeTo("fast", 1);
	$('.list3').fadeTo("fast",0);
});

$('#myVideo').click( function (){
    $(this).prop('muted', !$(this).prop('muted'));
});


/*$('#section1').click(function() {
    $('.unmute').fadeTo("fast", 0);
    $('.mute').fadeTo("fast",1);
}, function() {
    $('.unmute').fadeTo("fast", 1);
    $('.mute').fadeTo("fast",0);
});*/

$("#section1").click(function(){
    $(".mute").toggle();
});

