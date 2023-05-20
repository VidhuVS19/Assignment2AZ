document.addEventListener("DOMContentLoaded", function() {
let flag = false;
var button = document.querySelector("button");
var image = document.getElementById("bulb");
var src=image.src;
var bulboff="file:///C:/Users/91987/Desktop/Webdev%20Learning%202023/Algozenith/Assignment%202/light-bulb-off.png"
var bulbon="file:///C:/Users/91987/Desktop/Webdev%20Learning%202023/Algozenith/Assignment%202/light-bulb-on.png"
function switchONBulb() {
  image.src = bulbon;
  src=image.src;
}

function switchOFFBulb() {
  image.src = bulboff;
  src=image.src;
}

console.log(src);

button.addEventListener("click", function() {
  if (src === bulboff) {
    switchONBulb();
    flag = true;
  } else {
    switchOFFBulb();
    flag = false;
  }
});
})