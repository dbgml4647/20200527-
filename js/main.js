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

    document.body.style.background= pink;



}






function hover_in(event)
{

event.target.style.opacity=0.5;
event.target.style.transition = "all 0.3s";
document.style.display= "block"



}


function hover_out(event)
{

event.target.style.opacity=1;
event.target.style.transition = "all 0.3s"



}







console.log(location.href)
console.log(location.toString())

/*location.reload()*/







