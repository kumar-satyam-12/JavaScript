const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    clock.innerText= date.toLocaleTimeString()

},1000) //1000 means updates after every 1000ms or 1s