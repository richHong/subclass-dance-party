// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // window.counter++;
  // window.dancers.push(this);
  // window.timers.push(timeBetweenSteps);
  this.step(timeBetweenSteps);
  //console.log('this', this);

  this.setPosition(top, left);
  
};

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    console.log('this:', this)
    // console.log(window.dancers[window.counter]);
    // console.log(window.timers[window.counter]);
    var bounded = this.step.prototype.bind(this);
    // setTimeout(window.dancers[window.counter].step, window.timers[window.counter] );
    //window.dancers[0].step();
    setTimeout(bounded, timeBetweenSteps)
  };
  

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  

  //return dancer;
