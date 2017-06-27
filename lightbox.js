function openLightBox (modal_sel, id_sel, img_sel) {
        var modal = document.getElementById(modal_sel);
        
        modal.style.display = "block";
        //captionText.innerHTML = this.alt;
    }
        // Get the <s(pan> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
function closeModal (modal_sel) {
        var modal = document.getElementById(modal_sel);
        modal.style.display = "none";
    }

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})