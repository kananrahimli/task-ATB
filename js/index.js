// This function is called when page loads/window resizes
function mobMenu() {
  // Show hide Dropdown Menu button depending on window size when page loads/window resizes
  if ($(window).width() < 976) {
    $(".header-wrapper__navbar--list").addClass("mobile");
    $(".header-wrapper__navbar--list__close").addClass("show");
    $(".header-wrapper__navbar--bar").addClass("show");
  } else {
    $(".header-wrapper__navbar--list").removeClass("mobile");
    $(".header-wrapper__navbar--list__close").removeClass("show");
    $(".header-wrapper__navbar--bar").removeClass("show");
  }
  // Open Mobile menu
  $(".header-wrapper__navbar--bar").click(function () {
    $(".header-wrapper__navbar--list").addClass("show");
  });
  //CLOSE MENU
  $(".header-wrapper__navbar--list__close").click(function () {
    $(".header-wrapper__navbar--list").removeClass("show");
  });
}

$(window).resize(function () {
  mobMenu();
});

$(document).ready(function () {
  mobMenu();

  //Add sticky navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header-wrapper__navbar").addClass("sticky");
      $(".header-wrapper__navbar--fixed").addClass("container");
      // instead of alert you can use to show your ad
      // something like $('#footAd').slideup();
    } else {
      $(".header-wrapper__navbar").removeClass("sticky");
      $(".header-wrapper__navbar--fixed").removeClass("container");
    }
  });

  //Change section with link
  $(".header-wrapper__navbar--list__item--link").on("click", function (event) {
    $('.header-wrapper__navbar--list').removeClass("show");
    var $anchor = $(this);
   
    if($($anchor.attr("href"))[0].id=='testimonials'){
      $("html, body").animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50 + "px",
        },
        1000
      );
    }else{
      $("html, body").animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 100 + "px",
        },
        1000
      );
    }
   
    event.preventDefault();
  });

  //PROJECTS TABS SELECET
  $('.projects-tabs__item').click(function(){
    $('.projects-tabs__item').removeClass('active')
    $(this).addClass('active')
  let id= $(this).attr('data-value');
  $('.projects-content').each((k,v)=>{
      if(id==$(v).attr('id')){
        $('.projects-content').removeClass('active')
        $(v).addClass('active')
      }
  })
  })


  // SWIPER JS
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    
  });
});
