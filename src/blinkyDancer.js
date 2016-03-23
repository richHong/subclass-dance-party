var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  console.log("the thing that should be here is ", this.$node);
  this.$node.toggle();
}; 
