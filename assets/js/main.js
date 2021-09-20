// Set the date we're counting down to
var countDownDate = new Date("September 30, 2022 22:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' +  '<span id="hours">'+ hours + '</span>'
  // + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">'+ seconds + '</span>';
  var z = document.getElementsByClassName("countDownSpecial");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);

    var y = document.getElementsByClassName("countDownSpecial");
    for (var i = 0; i < y.length; i++) {
      y[i].innerHTML =
        "<span>00</span>" + "<span>00</span>" + "<span>00</span>";
    }

    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < g.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < t.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

$(document).ready(function () {
  //navbar product show/hide on scroll up/down
  var scrollY = 0;
  var lastScroll = 0;
  var largeDevices = $(window).width() > 768; //for working only in large devices

  var scrollToTop = $(".scroll-to-top");
  var stickScroll = $(".stick-on-scroll-md:not(.Moving)");
  var navbarHeight = $(".navbar-menu").height();
  $(window).scroll(function () {
    scrollY = $(this).scrollTop();
    if (scrollY > $("#ad-top").height() && largeDevices) {
      // if we didnt pass away ad-top section, act as a fixed element
      stickScroll.css({
        position: "fixed",
        top: navbarHeight,
      });
    } else if (largeDevices) {
      // after that, stick to top
      stickScroll.css({
        position: "sticky",
      });
    }

    if (lastScroll > scrollY) {
      // not(:animated) prevents multiple slideDown/Up in case of fast scroll Up and Down
      //scroll Up
      if (largeDevices) {
        stickScroll
          .addClass("Moving")
          .not(":animated")
          .slideDown(function () {
            stickScroll.removeClass("Moving");
          });
      }
      if (scrollY > $(window).height()) {
        scrollToTop.addClass("show");
      } else {
        scrollToTop.removeClass("show");
      }
      if (scrollY === 0) {
        $("html,body").removeClass("scrolling"); //eliminate scrolling class
      }
      lastScroll = scrollY;
    } else if (lastScroll < scrollY) {
      //scroll Down
      if (largeDevices) {
        stickScroll
          .addClass("Moving")
          .not(":animated")
          .slideUp(function () {
            stickScroll.removeClass("Moving");
          });
      }

      scrollToTop.removeClass("show");

      lastScroll = scrollY;
    }
  });

  // config carousels
  $(".regular-carousel").owlCarousel({
    rtl: true,
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    stagePadding: 0,
    responsiveClass: true,
    responsiveBaseElement: 'body',
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      740: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  $(".special-offer-carousel").owlCarousel({
    rtl: true,
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    stagePadding: 0,
    responsiveBaseElement: 'body',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      740: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  scrollToTop.click(function (d) {
    d.preventDefault;
    //not scrolling for prevent multiple clicks and buggy behaviour
    $("html,body").not(".scrolling").addClass("scrolling").animate({
      scrollTop: "0",
    });
  });
});

// $("#liveToastBtn").click(function () {
//   $("#liveToast").toast("show");
// });
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
