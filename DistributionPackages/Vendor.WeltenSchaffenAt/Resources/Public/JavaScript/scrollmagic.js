// init controller
var controller = new ScrollMagic.Controller();

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $line = $("path#line");
var $circle1 = $("path#oval-1");
var $circle2 = $("path#oval-2");

// prepare SVG
pathPrepare($line);
pathPrepare($circle1);
pathPrepare($circle2);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax({
    immediateRender: false
  })
  .add(TweenMax.to($circle1, 0.1, {
    opacity: 1,
    ease: Linear.easeNone
  })) // draw circle for 0.1
  .add(TweenMax.to($line, 0.9, {
    strokeDashoffset: 0,
    ease: Linear.easeNone
  })) // draw word for 0.9
  .add(TweenMax.to($circle2, 0.1, {
    opacity: 1,
    ease: Linear.easeNone
  })); // draw circle for 0.1

// create a scene
var scene = new ScrollMagic.Scene({
    duration: 100,
    offset: 50
  })
  .setPin("#yearly-donation") // pins the element for the the scene's duration
  //.addIndicators()
  .addTo(controller); // assign the scene to the controller

// create a scene
var scene7 = new ScrollMagic.Scene({
    offset: 50
  })
  .setClassToggle("#yearly-donation", "show")
  //.addIndicators()
  .addTo(controller); // assign the scene to the controller

// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 200
  })
  .setTween(tween)
  //.addIndicators()
  .addTo(controller);

// build scene
var scene6 = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
  })
  .setClassToggle(".vertical-line", "show")
  //.addIndicators()
  .addTo(controller);

// build scene
var scene3 = new ScrollMagic.Scene({
    triggerElement: "#where-does-it-go"
  })
  .setClassToggle("#where-does-it-go", "show")
  //.addIndicators()
  .addTo(controller);

// build scene
var scene4 = new ScrollMagic.Scene({

    offset: 50,

  })
  .on("enter", function(e) {
    $('.counter').countTo();
  })
  //.addIndicators()
  .addTo(controller);

scene4.reverse(false);

// build scene
var scene5 = new ScrollMagic.Scene({
    triggerElement: "#initiatives"
  })
  .setClassToggle("#initiatives", "show")
  //.addIndicators()
  .addTo(controller);

// build scene
var scene8 = new ScrollMagic.Scene({
    triggerElement: ".initiatives-block"
  })
  .setClassToggle(".initiatives-block", "show")
  //.addIndicators()
  .addTo(controller);

$('.initiative-check').on('click', function() {
  if(!$(this).hasClass('is-active')){
    $('.initiative-check').each(function(){
      $(this).removeClass('is-active');
    });
    $('.initiatives-content').each(function(){
      $(this).removeClass('is-active');
    });

    var targetDiv = $(this).data('initiative');
    $('.' + targetDiv + '-initiatives').addClass('is-active');
    $(this).toggleClass('is-active');
  }

});