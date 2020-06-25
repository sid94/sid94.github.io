// $(document).ready(function () {

//   })



document.onreadystatechange = function () {
  let state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function () {

      let elems = document.querySelectorAll('.btn')
      elems.forEach((elem) => {
        elem.addEventListener('click', function () {
          let divid = $(this).data("timeline")
          document.querySelector('#' + divid).classList.toggle('expand');
          $("#" + divid).slideToggle()
          $(this).text("read more")
          if ($('#' + divid).hasClass('expand')) {
            $(this).text("read less")
          }

        });
      })



      function animateProgressBar() {
        $('.skillbar').each(function () {
          if ($(this).isFullyInViewport()) {
            $(this).find('.skillbar-bar').animate({
              width: $(this).attr('data-percent')
            }, 2000);
          }
        });
      }

      $.fn.isFullyInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementTop >= viewportTop && elementBottom <= viewportBottom;
      };

      document.getElementById('interactive');
      document.getElementById('load').style.visibility = "hidden";
      document.getElementById('contents').style.visibility = "visible";
      document.querySelectorAll("#navbar li a").forEach(elem => elem.addEventListener("click", function () {
        $("#navbar li a").removeClass("active")
        $(this).addClass("active");
        let pageId = $(this).attr("data-page");
        $("html, body").animate({
          scrollTop: ($("#" + pageId).offset().top - 15)
        }, 1000);
      }));
      $(window).on('resize scroll', function () {
        // on page resize or scroll check if element is in viewport
        animateProgressBar();
      });
      animateProgressBar();
    }, 200);
  }
}