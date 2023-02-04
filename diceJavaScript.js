const names = ["Die1.png","Die2.png","Die3.png","Die4.png","Die5.png","Die6.png"];

function myFunct(){
    var y1 = Math.floor((Math.random()* 6));
    var y2 = Math.floor((Math.random()* 6));
    let name1 = names[y1];
    let name2 = names[y2];
    var d1 = document.getElementById("D1");
    var d2 = document.getElementById("D2");
    d1.setAttribute("src", name1);
    d2.setAttribute("src", name2);

}





