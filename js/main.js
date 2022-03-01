let target = document.querySelector(".dynamic");
let linktarget = document.querySelectorAll(".small-text > a");

linktarget.forEach((item,index)=>{
    item.addEventListener('mouseover',(event)=>{
        item.style.color="blue";
    })
    item.addEventListener('mouseout',(event)=>{
        item.style.color="white";
    })
})




function randomString() {
  let stringArr = ["Let'Go Jeju !", "Welcome to Jeju !", "I Like Jeju !"];

  let newNumber = Math.floor(Math.random() * stringArr.length);
  let selectString = stringArr[newNumber];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 130);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
