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
  if ($(window).width() > 768) {//for working only in large devices
    var scrollY = 0;
    var lastScroll = 0;
    var el = $(".stick-on-scroll-md:not(.Moving)");
    var navbarHeight = $(".navbar-menu").height();
    $(window).scroll(function () {
      scrollY = $(this).scrollTop();
      if (scrollY > $("#ad-top").height()) {
        // if we didnt pass away ad-top section, act as a fixed element
        el.css({
          position: "fixed",
          top: navbarHeight,
        });
      } else {
        // after that, stick to top
        el.css({
          position: "sticky",
        });
      }

      if (lastScroll > scrollY) {
        // not(:animated) prevents multiple slideDown/Up in case of fast scroll Up and Down
        //scroll Up
        el.addClass("Moving")
          .not(":animated")
          .slideDown(function () {
            el.removeClass("Moving");
          });
        lastScroll = scrollY;
      } else if (lastScroll < scrollY) {
        //scroll Down
        el.addClass("Moving")
          .not(":animated")
          .slideUp(function () {
            el.removeClass("Moving");
          });
        lastScroll = scrollY;
      }
    });
  }
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
    responsiveClass:true,
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
      }
    },
  });
  $(".num1-carousel").owlCarousel({
    rtl: true,
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    stagePadding: 0,
    responsiveClass:true,
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
      }
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
    responsiveClass:true,
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
      }
    },
  });
});

// $("#liveToastBtn").click(function () {
//   $("#liveToast").toast("show");
// });
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
