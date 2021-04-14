// When the user scrolls down 80px from the top of the document, resize the header's padding and the header1's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) 
  {
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.flexDirection = "row";
    document.getElementById("header").style.top = "0";
    document.getElementById("header1").style.fontSize = "20px";
    document.getElementById("header2").style.fontSize = "20px";
  } 
  else 
  {
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("header").style.position = "relative";
    document.getElementById("header").style.flexDirection = "column";
    document.getElementById("header2").style.textAlign = "left";
    document.getElementById("header1").style.fontSize = "25px";
    document.getElementById("header2").style.fontSize = "40px";
  }
}

$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.text-content').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.navigation a.active').removeClass('active');
          $('.navigation a').eq(i).addClass('active');
      }
  });
}).scroll();