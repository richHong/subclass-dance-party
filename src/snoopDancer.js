var makeSnoopDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

  this.$node = '<span><img id="snoopDancer" src="https://media.giphy.com/media/ScZzMlETdv9mg/giphy-facebook_s.jpg"></span>';

};

  makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
  makeSnoopDancer.prototype.constructor = makeDancer;

   makeSnoopDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


// $('#snoopDancer').css({top:'300px'})
[]


  snoopDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    // snoopDancer.$node.toggle();
  };