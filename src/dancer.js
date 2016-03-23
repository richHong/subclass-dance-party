// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, image){
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  if (image === undefined){
    this.$node = $('<span class="dancer" id="toBeLinedUp"></span>');
  } else {
    this.$node = $('<span class="nonDot toBeLinedUp">'+image+'</span>');
  }
  this.step();

  this.setPosition(top, left);
  this.timeCounted = timeBetweenSteps;
};

  makeDancer.prototype.step = function(){
    setTimeout(this.step.bind(this), this.timeCounted);
  };
  
  makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };