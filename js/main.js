(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);

// Prevent zooming on the page but allow iframe zoom
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});

document.addEventListener('gesturechange', function (event) {
    event.preventDefault();
});

document.addEventListener('gestureend', function (event) {
    event.preventDefault();
});

// Throttle function to limit execution of scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle iframe loading and display loading message
document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.getElementById("mapIframe"); // Ensure iframe has ID 'mapIframe'
    var loadingMessage = document.getElementById("iframeLoadingMessage"); // Ensure loading message has ID 'iframeLoadingMessage'

    // Initially show the loading message
    loadingMessage.style.display = 'flex';

    // Hide the loading message when the iframe fully loads
    iframe.onload = function () {
        loadingMessage.style.display = 'none';
    };

    // Fallback for older browsers if onload doesn't fire
    iframe.onreadystatechange = function () {
        if (iframe.readyState === 'interactive' || iframe.readyState === 'complete') {
            loadingMessage.style.display = 'none';
        }
    };
});

window.addEventListener('scroll', throttle(function () {
    // handle scroll
}, 100));

// Handle iframe loading and display loading message
document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.getElementById("mapIframe"); // Ensure iframe has ID 'mapIframe'
    var loadingMessage = document.getElementById("iframeLoadingMessage"); // Ensure loading message has ID 'iframeLoadingMessage'

    // Initially show the loading message
    loadingMessage.style.display = 'flex';

    // Hide the loading message when the iframe fully loads
    iframe.onload = function () {
        loadingMessage.style.display = 'none';
    };

    // Fallback for older browsers if onload doesn't fire
    iframe.onreadystatechange = function () {
        if (iframe.readyState === 'interactive' || iframe.readyState === 'complete') {
            loadingMessage.style.display = 'none';
        }
    };
});
