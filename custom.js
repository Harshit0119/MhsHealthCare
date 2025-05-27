AOS.init();
$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height >= 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    var swiper = new Swiper(".banner-slider-demo", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});
var swiper = new Swiper(".tc-header-style1 .header-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: !0,
    speed: 1500,
    parallax: !0,
    pagination: {
        el: ".header-slider .swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".header-slider .swiper-button-next",
        prevEl: ".header-slider .swiper-button-prev"
    },
    mousewheel: !1,
    keyboard: !0,
    // autoplay: { delay: 6000 },
    loop: !0,
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find(".img")
                    .attr({
                        "data-swiper-parallax": 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        },
    },
});

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20, 

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".beds-icons", {
    slidesPerView: 2,
    loop: !0,
    spaceBetween: 0,
    breakpoints: {

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },

        1280: {
          slidesPerView: 5,
          spaceBetween: 50
        }
    },
    freeMode: !0,
    autoplay: {
        delay: 6000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
nt = $(".stretcher-item");
nt.bind({
    mouseenter: function () {
        $(this).addClass("active");
        $(this).siblings().addClass("inactive");
    },
    mouseleave: function () {
        $(this).removeClass("active");
        $(this).siblings().removeClass("inactive");
    },
});
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: ""
    }, options);
    var thisElement = $(this);
    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete,
    });
};
$("#number1").jQuerySimpleCounter({
    end: 120,
    duration: 3000
});
$("#number2").jQuerySimpleCounter({
    end: 1000,
    duration: 3000
});
$("#number3").jQuerySimpleCounter({
    end: 2000,
    duration: 2000
});
$("#number4").jQuerySimpleCounter({
    end: 2000,
    duration: 2000
});
$("#number5").jQuerySimpleCounter({
    end: 2000,
    duration: 2000
});
$(".about-me-img").hover(
    function () {
        $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
    },
    function () {
        $(".authorWindowWrapper").stop().fadeOut("fast").find("p").removeClass("trans");
    }
);

// tabs inner page js //

$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})

//image thumb slider//
jQuery(document).ready(function ($) {

    $('.thumb-img a').on("click", function (e) {
        e.preventDefault();
        $('.thumb-previewer img').attr("src", $(this).attr("href"));
    });

});

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    freeMode: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
            slidesPerView: 2,
            spaceBetween: 0,
            
        }, 
        
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
          
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
          
        }
    }
});
const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    grabCursor: true,
    thumbs: {
        swiper: sliderThumbs
    },
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
            
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('dropdownToggle');
    var dropdownMenu = document.getElementById('dropdownMenu');

    function updateDropdownDisplay() {
        if (window.innerWidth <= 991) {
            dropdownMenu.classList.remove('active');
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = '';
        }
    }
    updateDropdownDisplay();
    window.addEventListener('resize', updateDropdownDisplay);

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (window.innerWidth <= 991) {
            if (dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.classList.add('active');
                dropdownMenu.style.display = 'block';
            }
        } else {
        }
    });
});



// download pdf js
$(document).ready(function() {
    $('.downloadBtn').on('click', function(event) {
        event.preventDefault(); // Prevent the default action
        
        // Create a temporary <a> element
        var $tempLink = $('<a>');
        $tempLink.attr('href', $(this).attr('href'));
        $tempLink.attr('download', ''); // Optional: Suggests a filename

        // Append to the body, click it, and remove it
        $('body').append($tempLink);
        $tempLink[0].click();
        $tempLink.remove();
    });
});

$(document).ready(function(){
   setTimeout(function showModal() {
        $('#exampleModalCenter').modal('show');
        setTimeout(showModal, 20000);
    }, 20000);
 });



 $(document).ready(function() {
    var video = $('#vid')[0];
    video.muted = true; // Mute the video
    video.play();
});

const video = document.getElementById('vid');

// Hide native controls once the video is ready to play
video.addEventListener('loadeddata', () => {
    video.controls = false;
});


$(document).ready(function() {
    var video = $('#vid');

    if (video.length) {
        // Try to autoplay the video
        video[0].play().catch(function(error) {
            // Handle any playback errors here, if needed
            console.log('Autoplay failed:', error);
        });

        // Hide the central play button (if there is a custom play button, this should target it)
        video.on('play', function() {
            $(this).attr('controls', true); // Ensure controls are visible if you want them
        });
    }
});


$(document).ready(function() {
    var video = $('#vid').get(0);

    // Ensure the video plays after user interaction
    $(document).on('touchstart click', function() {
        video.play();
    });
});
