//objet JSON
var obj = {
    Firstname: "Foulen",
    Lastname:"Ben foulen",
    age: 52
}
console.log(obj.age);
//or
console.log(obj["age"]);
//or 
var myname="Foulen"
var obj = {
    Firstname: myname,
    Lastname:"Ben foulen",
    age: 52
}
console.log(obj.Firstname)
//tableau:variable avec plusieurs information
/*var users=['mouna','hadil','yassmine','amine','maram']
console.log(users[2])
users.push('malek')
users.splice(3,1)
console.log(users)*/
//spilce pour effacer un element du tableau, (x,y)x: apartir quel element(l'emplacement) et y:le nb d'element a effacer
var users=['mouna','hadil','yassmine','amine','maram']
document.write("<ul>")
for (var user of users){
    document.write("<li>", user,"</li>")
}
document.write("</ul>")
//c pour ecrire un code JS en HTML

/* la difference entre let et var*/
//var
for (var i=0; i < 5; i=i+1){
console.log(i);
 }
 console.log ("finally :" ,i);
 //let

for (let x=0; x < 5; x=x+1){
console.log(x);
 }
 console.log ("finally :" ,x);
 // git