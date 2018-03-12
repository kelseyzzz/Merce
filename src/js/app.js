
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");






$(window).on('load', function(){

	$('#preloader').delay(4000).fadeOut(1500,function(){
		$(this).remove();
    });
    $(".merci-desktop-home").delay(4000).fadeOut(1500, function(){
        $this.remove();
    });
});

$('.map').on('click', function(){
	$('#preloader-map-page').delay(1000).fadeOut('slow',function(){
		$(this).remove();
    });
});

// nav.find('a').on('click', function () {
//     var $el = $(this)
//       , id = $el.attr('href');
  
//     $('html, body').animate({
//       scrollTop: $(id).offset().top - nav_height
//     }, 500);
  
//     return false;
//   });
// change back to 4000 when done

///////////////////////////////////////////////////////////// making nav work

$('.home, active-home-merci').on('click', function(){
    $('.about-wrapper').addClass('current-page');
    $('.about-wrapper').removeClass('invisible-page');
    $('.location-wrapper').addClass('invisible-page');
    $('.reservation-wrapper').addClass('invisible-page');
    $('.map-wrapper').addClass('invisible-page');
});


$('.location, active-location').on('click', function(){
    $('.location-wrapper').addClass('current-page');
    $('.location-wrapper').removeClass('invisible-page');
    $('.about-wrapper').addClass('invisible-page');
    $('.reservation-wrapper').addClass('invisible-page');
    $('.map-wrapper').addClass('invisible-page');

});

$('.reservation').on('click', function(){
    $('.reservation-wrapper').addClass('current-page');
    $('.reservation-wrapper').removeClass('invisible-page');
    $('.about-wrapper').addClass('invisible-page');
    $('.location-wrapper').addClass('invisible-page');
    $('.map-wrapper').addClass('invisible-page');
    TweenLite.from($("#reserve-btn"), 1, {right:-100, autoAlph:0});
});

$('.map').on('click', function(){
    $('.map-wrapper').addClass('current-page');
    $('.map-wrapper').removeClass('invisible-page');
    $('.about-wrapper').addClass('invisible-page');
    $('.location-wrapper').addClass('invisible-page');
    $('.reservation-wrapper').addClass('invisible-page');


  TweenLite.from($("#super-heading-m"), 1, {left:-100, autoAlph:0});

});


// $('nav ul li a').click(
//     function(e) {
//         e.preventDefault(); // prevent the default action
//       $('#switch-nav').attr('src', '../dist/img/active-nav.png');
//     });


$( '.normal-nav li' ).on( 'click', function() {
    $( this ).parent().find( 'li.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
});

///////////////////////////////////////////////////////////// end of making nav work




//////////////////////////////////////////////////////////  making of circle cursor


$(".about-wrapper").append('<div class="cursor"></div>');
$(".about-wrapper").append('<style> .cursor {z-index:10000000000000; position: fixed;background-color:#c7e2dd;width:25px;height:25px;border-radius:100%;transform:translate(-50%,-50%);top:0px;left:0px;pointer-events:none;}');

$(document).mousemove(function(e){
   $(".cursor").css("top",e.pageY - scrollY + "px").css("left",e.pageX - scrollX + "px");
});

//////////////////////////////////////////////////////////  end of making of circle cursor


//////////////////////////////////////////////////////////// beginning of painting home


$('.canvas').on('click', function(){
	$('.pulsing-ring').fadeOut(1);
});



var bridge = document.getElementById('bridge');
var bridgeCanvas = bridge.getContext('2d');
var brushRadius = (bridge.width / 100) * 10;
var img = new Image();

// if (brushRadius < 50) { brushRadius = 50 }

img.onload = function(){  
	bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
};

img.loc = 'dist/img/';
img.filename = 'erase-bg.png';
if (window.devicePixelRatio >= 2) {
	var nameParts = img.filename.split('.');
	img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
} else {
	img.src = img.loc + img.filename;
}

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef) {
	var bridgeRect = bridge.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*bridge.width),
	  y: Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*bridge.height)
    };
}
      
function drawDot(mouseX,mouseY){
	bridgeCanvas.beginPath();
    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    bridgeCanvas.fillStyle = '#000';
    bridgeCanvas.globalCompositeOperation = "destination-out";
    bridgeCanvas.fill();
}

bridge.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y);
  }
}, false);

bridge.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);



/////////////////////////////////////////////////////////////////////////// end of painting home




///////////////////////////////////////////////////////// splitting reservation header









///////////////////////////////////////////////////////// end of splitting reservation header


////////////////////////////////////////////////////////// Form









$('#AddButton').click( function() {
    var counter = $('#guest-count').val();
    if(counter<15) {
        counter++ ;
    }
    $('#guest-count').val(counter);
});

$('#SubButton').click( function() {
    var counter = $('#guest-count').val();
    if(counter>0) {
        counter-- ;
    }
    $('#guest-count').val(counter);
});


$('#AddTicket1').click( function() {
    var counter = $('#ticket-count-1').val();
    if(counter<15) {
        counter++ ;
    }
    $('#ticket-count-1').val(counter);
});

$('#SubTicket1').click( function() {
    var counter = $('#ticket-count-1').val();
    if(counter>0) {
        counter-- ;
    }
    $('#ticket-count-1').val(counter);
});

$('#AddTicket2').click( function() {
    var counter = $('#ticket-count-2').val();
    if(counter<15) {
        counter++ ;
    }
    $('#ticket-count-2').val(counter);
});

$('#SubTicket2').click( function() {
    var counter = $('#ticket-count-2').val();
    if(counter>0) {
        counter-- ;
    }
    $('#ticket-count-2').val(counter);
});







$('.selectpicker').selectpicker({
    size: 4,
    dropupAuto: false
  });

  $('#bottom-open').datepicker({
    orientation: "bottom auto"
});

  $('#datepicker').datepicker({
    todayBtn: true,
    todayHighlight: true,
    autoclose: true,
    format:'MM'+' '+'dd'+','+' yyyy'
});

var currentDate = new Date();

$("#datepicker").datepicker("setDate", currentDate);




var $slideBtn = $("#reserve-btn"),
slideBtnText = $slideBtn.find("p")[0];

$slideBtn.on("mouseenter", slinkOver);

function slinkOver() {
    TweenLite.to(slideBtnText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
        TweenLite.fromTo(slideBtnText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut});
    }});
}



var $popBtn = $(".purchase-mobile-btn"),
popBtnText = $popBtn.find("p")[0];
  
$popBtn.on("mouseenter", linkOver);
  
function linkOver() {
    TweenLite.to(popBtnText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
        TweenLite.fromTo(popBtnText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut});
    }});
}  

var $popBtnTwo = $(".purchase-mobile-btn-2"),
popBtnTwoText = $popBtnTwo.find("p")[0];
  
$popBtnTwo.on("mouseenter", linkOverTwo);
  
function linkOverTwo() {
    TweenLite.to(popBtnTwoText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
        TweenLite.fromTo(popBtnTwoText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut});
    }});
} 
       

var $popDeskBtn = $(".purchase-desktop-btn"),
popDeskBtnText = $popDeskBtn.find("p")[0];
    
$popDeskBtn.on("mouseenter", dLinkOver);
    
function dLinkOver() {
    TweenLite.to(popDeskBtnText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
        TweenLite.fromTo(popDeskBtnText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut});
    }});
} 

var $popDeskTwoBtn = $(".purchase-desktop-btn-2"),
popDeskTwoBtnText = $popDeskTwoBtn.find("p")[0];
    
$popDeskTwoBtn.on("mouseenter", dLinkOverTwo);
    
function dLinkOverTwo() {
    TweenLite.to(popDeskTwoBtnText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
        TweenLite.fromTo(popDeskTwoBtnText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut});
    }});
} 


      





  
  ////////////////////////////////////////////////////////////////////////////////// end of reservation form








  




  ////////////////////////////////////////////////////////////////////////////////////////// mobile map pop up

  $('.state').each(function() { 
    $(this).on("click", function(){
        console.log('ay aye ay');
        $('.pop-up-desktop').css('display','flex');
    });
    
});



$('.close-desktop').on('click', function() { 
     $('.pop-up-desktop').css('display','none');
});

$('.close-desktop-2').on('click', function() { 
     $('.pop-up-desktop-2').css('display','none');
});

$('.purchase-desktop-btn-2').on('click', function() { 
    $('.pop-up-desktop-2').css('display','none');
});


$('.purchase-desktop-btn').on('click', function() { 
    $('.pop-up-desktop-2').css('display','flex');
    $('.pop-up-desktop').css('display','none');
    
});


$('.mobile-state').each(function() { 
    $(this).on("click", function(){
        $('.pop-up-mobile').css('display','flex');
    });
    
});

$('.close').on('click', function() { 
    console.log('aklsdjfkds');
     $('.pop-up-mobile').css('display','none');
});

$('.purchase-mobile-btn').on('click', function() { 
     $('.pop-up-mobile-2').css('display','flex');
     $('.pop-up-mobile').css('display','none');
     
});


$('.close-2').on('click', function() { 
    console.log('aklsdjfkds');
     $('.pop-up-mobile-2').css('display','none');
});


$('.purchase-mobile-btn-2').on('click', function() { 
    console.log('aklsdjfkds');
     $('.pop-up-mobile-2').css('display','none');
});








//////////////////////////////////////////////////////////////////////////////////////////  end of mobile map pop up



////////////////// location

$( '.location-title' ).letterDrop();







})();






