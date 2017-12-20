
//silde jQuery
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
//coordinate function
function getCoordinates(e){
  var x = e.clientX;
  var y = e.clientY;
  document.getElementById("xycoordinates").innerHTML="HeHe...";
  // Coordinates: (" + x + "," + y + ")
  if (x > 618 && x < 666 && y > 420 && y < 479) {
    document.getElementById("xycoordinates").innerHTML = "Oh! You find me!!";
    //document.getElementById("xycoordinates").style.color = "red";
  }
}
function clearCoordinates(){
  document.getElementById("xycoordinates").innerHTML="Move your mouse on the picture to find me.<br>(only avaliable in 1920X1080)";
}

//smooth scroll
$(document).ready(function(){
  //filpbox
  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
  //list_group active
  $('.list-group-item').hover(function(){
    $(this).addClass('active');
  },function(){
    $(this).removeClass('active');
  });
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#navbars a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
