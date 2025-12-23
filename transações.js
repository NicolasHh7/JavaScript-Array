// ========= TRANSAÇÕES =========
const transacoes = [
    { id: 1, descricao: "Venda de Poção", valor: 150.00, categoria: "Receita" },
    { id: 2, descricao: "Ingredientes Botânicos", valor: -50.00, categoria: "Suprimentos" },
    { id: 3, descricao: "Aluguel da Biblioteca", valor: -100.00, categoria: "Infraestrutura" },
    { id: 4, descricao: "Consultoria Mágica", valor: 300.00, categoria: "Receita" }
];
class RelatorioFinanceiro{
    #transacoes
    constructor(transacoesIniciais){
        this.#transacoes = transacoesIniciais
    }
    get filtro(){
        return this.#transacoes.filter(
            t => t.valor > 0
        )
    } toUp
    get mapa(){
        return this
    }
}
const relatorio = new RelatorioFinanceiro()
console.log(relatorio.filtro())