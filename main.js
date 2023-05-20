var bulboff = document.querySelector("#bulboff")
var bulbon = document.querySelector("#bulbon")
var button = document.querySelector(".CircleButton")

function switchON(){
    bulboff.style.display='none'
    bulbon.style.display='block'
}

function switchOFF(){
    bulboff.style.display='block'
    bulbon.style.display='none'
}

button.addEventListener("click",function(){
    if(bulbon.style.display === 'none'){
        switchON()
    }
    else{
        switchOFF()
    }
})
