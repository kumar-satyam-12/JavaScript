// code for generating random color
let randomcolor = function(){
const hex = '0123456789ABCDEF'
let color = '#'

for(i=0; i<6;i++ ){ // loop is running 6 times because color is hexa coded and requires 6 digits
    color = color+hex[Math.floor((Math.random())*16)]
}
return color 
}

let intervalId
const startcolorchange = function(){
    intervalId = setInterval(changeBgcolor, 1000)



   function changeBgcolor(){
    document.body.style.backgroundColor = randomcolor()
   }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', startcolorchange )
document.querySelector('#stop').addEventListener('click', stopChangingColor)





