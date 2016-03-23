var makeWbDancer = function(top, left, timeBetweenSteps, image){
  makeDancer.apply(this, arguments);

};

  makeWbDancer.prototype = Object.create(makeDancer.prototype);
  makeWbDancer.prototype.constructor = makeDancer;

   makeWbDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  wbDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);
  };