/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let r = Math.random()
let f,s,t
if (r < 0.33) {
    f = "Crazy"
} else if(r >= 0.33 && r < 0.66) {
    f = "Amazing"
}else{
    f = "Fire"
}
if (r < 0.33) {
    s = "Engine"
} else if(r >= 0.33 && r < 0.66) {
    s = "Foods"
}else{
    s = "Garments"
}
if (r < 0.33) {
    t = "Bros"
} else if(r >= 0.33 && r < 0.66) {
    t = "Limited"
}else{
    t = "Hub"
}

console.log(`${f} ${s} ${t}`)