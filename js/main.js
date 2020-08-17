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

/*function promptfunc(){
    
    if(prompt('이름은 무엇인가요?') === "유희")
    {
        alert("이름이 정확해요!")
    }
    else
    {
        alert("이 사기꾼!")
    }

}
*/
function zoomIn(event) {
    event.target.style.transform = "scale(1.5)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.3s";
    
    

  }

function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.3s";
  }


function onchangecolor(event){

    
k;


}






function hover_in(event)
{

event.target.style.opacity=1;
event.target.style.zIndex = 0;
event.target.style.transition = "all 0.1s";


}


function hover_out(event)
{

event.target.style.opacity=0.4;
event.target.style.transition = "all 0.1s"



}







console.log(location.href)
console.log(location.toString())

/*location.reload()*/




/* Slide Mene */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function initMap() {
  // The location of Uluru
  var my_location = {lat: 36.0319404, lng: 129.3381051};
  var my_university = {lat: 36.1460668, lng: 128.3912488};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7, center: my_location});
  // The marker, positioned at Uluru
  //var marker2 = new google.maps.Marker({position : my_university, map:map});

  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(36.0319404, 129.3381051),
    map: map,
    title: 'My House',
    icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
      labelOrigin: new google.maps.Point(50,50)
    },
    label: {
      text: 'Home',
      color: 'black'
    }
  });

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(36.1460668, 128.3912488),
    map: map,
    title: 'My House',
    icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/green.png',
      labelOrigin: new google.maps.Point(100,100)
    },
    label: {
      text: 'Home',
      color: 'black'
    }
  });





}