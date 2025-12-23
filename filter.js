const usuarios = [
    {nome:"Gol", marca: "volkswagem"},
    {nome:"iX35", marca: "hyundai"},
    {nome:"Santa Fé", marca: "hyundai"},
    {nome:"Polo", marca: "volkswagem"},
]
const marcaHyun = usuarios.filter(
    usuarios => usuarios.marca == "hyundai"
)
console.log(marcaHyun)