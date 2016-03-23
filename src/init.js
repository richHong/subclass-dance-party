$(document).ready(function(){
  window.dancers = [];


  $(".addBlinkyDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

  $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".addWBDancerButton").on("click", function(event){
    var WbDancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var WbDancerMakerFunction = window[WbDancerMakerFunctionName];


    var WbDancer = new WbDancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000, '<img id="wbDancer" src="http://s2.favim.com/orig/150822/adorable-background-black-and-white-cute-Favim.com-3165433.gif">'
    );
    $('body').append(WbDancer.$node);
    window.dancers.push(WbDancer);
  });


  $(".addSnoopDancerButton").on("click", function(event){
    var snoopDancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var snoopDancerMakerFunction = window[snoopDancerMakerFunctionName];


  var snoopDancer = new snoopDancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000, '<img id="snoopDancer" src="http://files.gamebanana.com/img/ico/  sprays/547b7a894bcc7.gif">'
  );


  $('body').append(snoopDancer.$node);
    window.dancers.push(snoopDancer);
  });


 $(".lineEmUp").on("click", function(event){
    var lineEmUpFunctionName = $(this).data("data-dancer-lineup-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var lineEmUpFunctionName = window[lineEmUpFunctionName];
    $('span').css('left', '50%')
  });


 $(".leanRight").on("click", function(event){
    $('span').css('transform', 'rotate(30deg)');
  });


 $(".leanLeft").on("click", function(event){
    $('span').css('transform', 'rotate(-30deg)');
  });


 $(".jump").on("click", function(event){
    $('img').animate({'margin-top':"-=200px"}, "slow");
    $('img').animate({'margin-top':"+=200px"}, "slow");
  });

});

