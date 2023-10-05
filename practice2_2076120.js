var coin = 0; 
document.getElementById("current").innerHTML = coin + "원"; 
document.getElementById("selection").innerHTML = "아이스크림을 선택해주세요";
function click_btn1() {
  coin = coin + 1000;
  color_change();
  alert("1000원 넣음"); 
  document.getElementById("current").innerHTML = coin + "원";
}
function click_btn2() {
  coin = coin + 500;
  color_change();
  alert("500원 넣음"); 
  document.getElementById("current").innerHTML = coin + "원";
}
function click_btn3() {
  coin = coin + 100;
  color_change();
  alert("100원 넣음"); 
  document.getElementById("current").innerHTML = coin + "원";
}
function click_icecream1() {
  if(coin - 700 < 0) {
    alert("금액이 부족합니다.")
    return;
  }
  coin -= 700;
  document.getElementById("selection").innerHTML= "돼지바";
  color_change(); 
  document.getElementById("current").innerHTML= coin + "원";
}
function click_icecream2() {
  if(coin - 1000 < 0) {
    alert("금액이 부족합니다.");
    return;
  }
  coin -= 1000;
  document.getElementById("selection").innerHTML= "월드콘";
  color_change(); 
  document.getElementById("current").innerHTML= coin + "원";
}
function click_icecream3() {
  if(coin - 500 < 0) {
    alert("금액이 부족합니다.")
    return;
  }
  coin -= 500;
  document.getElementById("selection").innerHTML= "누크바";
  color_change(); 
  document.getElementById("current").innerHTML= coin + "원";
}
function color_change() {
  if(coin >= 1000){
    document.getElementById("icecream1").style.color = "blue"; 
    document.getElementById("icecream2").style.color = "blue";
    document.getElementById("icecream3").style.color = "blue";
  } else if( coin < 500) {
    document.getElementById("icecream1").style.color = "red"; 
    document.getElementById("icecream2").style.color = "red";
    document.getElementById("icecream3").style.color = "red";
  } else if( coin >= 500 && coin < 700) {
    document.getElementById("icecream1").style.color = "red"; 
    document.getElementById("icecream2").style.color = "red";
    document.getElementById("icecream3").style.color = "blue";
  } else if(coin < 1000 &&coin >=  700 ){
    document.getElementById("icecream1").style.color = "blue"; 
    document.getElementById("icecream2").style.color = "red";
    document.getElementById("icecream3").style.color = "blue";
  }
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click" , click_btn1);
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click" , click_btn3);
const icecream1 = document.getElementById("icecream1");
icecream1.addEventListener("click", click_icecream1);
const icecream2 = document.getElementById("icecream2");
icecream2.addEventListener("click", click_icecream2);
const icecream3 = document.getElementById("icecream3");
icecream3.addEventListener("click", click_icecream3);