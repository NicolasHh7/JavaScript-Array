/*
Remover itens indesejados,filter,Um Array (menor ou igual)
Transformar os itens,map,Um Array (mesmo tamanho)
Somar ou Unificar tudo,reduce,"Um valor único (número, string, etc.)"
*/
const usuarios = [
    {nome:"Gol", marca: "volkswagem"},
    {nome:"iX35", marca: "hyundai"},
    {nome:"Santa Fé", marca: "hyundai"},
    {nome:"Polo", marca: "volkswagem"},
]
const marcarUser = usuarios.filter(
    users => users.marca == "volkswagem"
)

console.log(marcarUser)