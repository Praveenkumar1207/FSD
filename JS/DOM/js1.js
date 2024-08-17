// console.log(document.getElementById("id1").innerHTML);
// console.log(document.getElementById("id2").innerHTML);
// console.log(document.getElementsByClassName("class1"));
function change(){
    var elem = document.getElementById("mydiv");
    elem.innerHTML = "HELLO";
    elem.setAttribute("style", "background-color: red"); 
    console.log(elem);
}