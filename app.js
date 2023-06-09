var x = prompt("Studend Name ")
document.write('Student Name :' +x ,'<br>')
var y = +prompt("Com marks ")
document.write('Computer marks :' +y ,'<br>')
var z = +prompt("Phy marks ")
document.write('Physics marks :' +z ,'<br>')
var r = +prompt("Urdu marks ")
document.write('Urdu mmarks :' +r ,'<br>')
var e = +prompt("Math marks ")
document.write('Math marks :' +e ,'<br>')

var h = y+z+r+e
var a = (h/400)*100

if (a >= 90 ){
    document.write("Grade :A+");
}
else if( a >= 80){
    document.write("Grade :A");
}
else if( a >= 70){
    document.write("Grade :B");
}
else if( a >= 60){
    document.write("Grade :C");
}
else if( a >= 50){
    document.write("Grade :D");
}
