function f(){
    var d = new Date();
    document.getElementsByClassName("seconds")[0].innerHTML= d.getSeconds();
    document.getElementsByClassName("minutes")[0].innerHTML = d.getMinutes();
    document.getElementsByClassName("hours")[0].innerHTML= d.getHours();
}
setInterval(f,1000);