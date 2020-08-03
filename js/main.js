//javascript 실험 


//alert 
//window.alert("이것은 자바 스크립트 실험입니다")



//confirm 
/*
if ( confirm('확인을 누르면 ok, 취소는 누르면 종료'))
{
    alert("OK!!")
}
else
{

    alert("END!!")
}
*/

//prompt

function promptfunc(){
    
    if(prompt('이름은 무엇인가요?') === "유희")
    {
        alert("이름이 정확해요!")
    }
    else
    {
        alert("이 사기꾼!")
    }

}

/*function zoomIn(event) {
    event.target.style.transform = "scale(1.5)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.3s";
    
    

  }

  function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.3s";
  }
*/

console.log(location.href)
console.log(location.toString())

/*location.reload()*/


   // Get the modal
   var modal = document.getElementById('myModal');
 
   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];                                          

   // When the user clicks on the button, open the modal 
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





