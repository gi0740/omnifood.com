// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// }); /*changing the h1 element to a red background when we click on it*/

$(document).ready(function () {
  /* if the user scrolls down the sticky nav will  be added */
  /* for sticky navigation */
  $(".js--section-features").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
    {
      offset: "60px;";
    }
  });

  /* Scroll on buttons */
  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  }); /*when js-scroll-to-plan is clicked it will take the user to the top of the js-section-plans at a speed of 1000 miliseconds aka 1 second */

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      1000
    );
  });

  /*Animation on scroll */
  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    (direction) => {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    (direction) => {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    (direction) => {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  /*mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
    }
    icon.addClass("ion-navicon-round");
    icon.removeClass("ion-close-round");
  });
});
