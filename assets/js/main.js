(function ($) {
   $(document).ready(function () {

   
    var counterUp = window.counterUp["default"];
    var $counters = $(".counter");
    function animateCounters() {
        $counters.each(function (ignore, counter) {
            var waypoint = new Waypoint({
                element: $(this),
                handler: function () {
                    counterUp(counter, { duration: 1000, delay: 16 });
                    this.destroy();
                },
                offset: "bottom-in-view",
            });
        });
    }
    animateCounters(); 

    // testimonial 
    var swiper = new Swiper(".testimonial-slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
       
   });
})(jQuery);

