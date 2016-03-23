var makeSnoopDancer = function(top, left, timeBetweenSteps,image){
   makeDancer.apply(this, arguments);
};

  makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
  makeSnoopDancer.prototype.constructor = makeDancer;

   makeSnoopDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  snoopDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);
  };