$(document).ready(function() {

  var waypoint = new Waypoint({
    element: $(".js--section-features"),
    handler: function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "25%"
  });

  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-features").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000,
      "linear"
    );
  });

  var waypoint1 = new Waypoint({
    element: $(".js--wp-1"),
    handler: function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },
    offset: "50%"
  });

  var waypoint2 = new Waypoint({
    element: $(".js--wp-2"),
    handler: function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    },
    offset: "50%"
  });

  var waypoint3 = new Waypoint({
    element: $(".js--wp-3"),
    handler: function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    },
    offset: "50%"
  });

  var waypoint3 = new Waypoint({
    element: $(".js--wp-4"),
    handler: function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    },
    offset: "50%"
  });

  $('.js--mobile-nav').click(function() {
      var mainNav = $('.js--main-nav');
        var menuClossButton = $('.js--mobile-nav ion-icon');
      mainNav.slideToggle(200);
      if (menuClossButton.attr("name")=='menu') {
        menuClossButton.attr("name", 'close');
      } else {
        menuClossButton.attr("name", 'menu');
      }

  })

});
