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
 $('#CD1').hover(function(){
    var ht = $(this).height()
    $('#CDBack1').height(ht)
    $('#CD1').fadeTo("fast", 0);
    $('#CDBack1').fadeTo("fast", 1);
 }, function() {
   $('#CD1').fadeTo("fast", 1);
   $('#CDBack1').fadeTo("fast", 0);
 });
});

$(function() {
 $('#CD2').hover(function(){
    var ht = $(this).height()
    $('#CDBack2').height(ht)
    $('#CD2').fadeTo("fast", 0);
    $('#CDBack2').fadeTo("fast", 1);
 }, function() {
   $('#CD2').fadeTo("fast", 1);
   $('#CDBack2').fadeTo("fast", 0);
 });
});$(function() {
 $('#CD3').hover(function(){
    var ht = $(this).height()
    $('#CDBack3').height(ht)
    $('#CD3').fadeTo("fast", 0);
    $('#CDBack3').fadeTo("fast", 1);
 }, function() {
   $('#CD3').fadeTo("fast", 1);
   $('#CDBack3').fadeTo("fast", 0);
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




/*$('#show').hover(function() {
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
*/
$('#myVideo').click( function (){
    $(this).prop('muted', !$(this).prop('muted'));
});


$("#section1").click(function(){
    $(".mute").toggle();
});

