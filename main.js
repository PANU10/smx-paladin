

  window.onload=function() {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var mainmenu = document.getElementById("mainmenu");

    // Get the offset position of the navbar
    var sticky = mainmenu.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        mainmenu.classList.add("sticky")
      } else {
        mainmenu.classList.remove("sticky");
      }
    }

  };
