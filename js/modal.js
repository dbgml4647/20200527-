
//여기서 프로젝트 아이디를 뽑아야한다 


function reply_click(clicked_id)
{
    event.target.style.opacity=1;
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.1s";

    //alert(clicked_id);
    var click_img = clicked_id;

    //alert(click_img);

     // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById(click_img);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    
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




