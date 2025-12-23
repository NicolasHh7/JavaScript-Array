const frutas = ["apple", "orange", "cherry"]
const percorrer = function(item, i, arr){
    console.log("item - ${i}: " + item)
    i++ 
}
frutas.forEach(percorrer)