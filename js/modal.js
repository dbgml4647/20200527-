function reply_click(clicked_id)
{
    
    //alert(clicked_id);
    var click_img = clicked_id;
    var click_modal = clicked_id+ "_modal";
    var closeitem = clicked_id + "_close";

    //alert(click_img);

     // Get the modal
    var modal = document.getElementById(click_modal);

    // Get the button that opens the modal
    var btn = document.getElementById(click_img);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName(closeitem)[0];


    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

   
  
}




