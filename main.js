$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".sticky").addClass("stickyAdd");
  } else {
    $(".sticky").removeClass("stickyAdd");
  }
});

var typed = new Typed(".element", {
  strings: [
    "WEB &amp; MOBILE DEVELOPMENT",
    "INTERNET MARKETING",
    "GRAPHIC DESIGN",
    "EDUCATION",
  ],
  typeSpeed: 100,
  smartBackspace: true,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
  startDelay: 1000,
});

// this code doesn't work for some reason
// $(window).on("scrooll", function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 50) {
//     $(".sticky").addClass("stickyAdd");
//   } else {
//     $(".sticky").removeClass("stickyAdd");
//   }
// });
