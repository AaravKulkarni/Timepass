function check(){
    var Checker = "Aaravk2020!";
var Checking = document.getElementById("checking").value;
    if(Checker == Checking){
        var Image1 = "<br> <br> <img src='https://www4.pictures.stylebistro.com/gi/Alexandra+Daddario+Pants+Shorts+Short+Shorts+dBvE2Fj2S4xl.jpg' width='300px'>";
        var Image2 = "<br> <br> <img src='https://www2.pictures.stylebistro.com/gi/Cinema+Society+Lancome+Nylon+Host+Screening+RDNa1vrRZmSl.jpg' width='300px'>";
        var FullDiv = Image1 + Image2;
        document.getElementById("img").innerHTML = FullDiv;
    }
}