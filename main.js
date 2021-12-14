function check(){
    var Checker = "Aaravk2020!";
var Checking = document.getElementById("checking").value;
    if(Checker == Checking){
        var Image1 = "<br> <br> <img src='http://2.bp.blogspot.com/-zyrBKa3XgUE/VY1mYcsPGfI/AAAAAAAAAHo/IOG81wL1Gm4/s1600/Alexandra%2BDaddario%2Bjohn%2Bflaming%2BBra%252C%2BBust%252C%2BHips%252C%2BWaist%2BSize.jpg' width='300px'>";
        var Image2 = "<br> <br> <img src='https://www.theplace2.ru/archive/emma_watson/img/Emma_Watson_Charle-9.jpg' width='300px'>";
        var FullDiv = Image1 + Image2;
        document.getElementById("img").innerHTML = FullDiv;
    }
}