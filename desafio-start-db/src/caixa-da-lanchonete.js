class CaixaDaLanchonete {
    constructor(){
        this.carrinho = {}
        this.formasDePagamento = ["dinheiro", "credito", "debito"]
        this.cardapio = {
            "cafe" : 3.00,
            "chantily" : 1.50,
            "suco" : 6.20,
            "sanduiche" : 6.50,
            "queijo" : 2.00,
            "salgado" : 7.25,
            "combo1" : 9.50,
            "combo2" : 7.50
        }
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            this.validaPropriedades(metodoDePagamento, itens)
            this.addItensNoCarrinho(itens)
            this.validaItensExtras()

            const totalNoCarrinho = this.calcularPrecoNoCarrinho()
            const total = this.adicionaMeioDePagamento(metodoDePagamento, totalNoCarrinho)

            return `R$ ${total.toFixed(2).replace('.',',')}`
            
        } catch (error) {
            return error
        }
    }

    validaPropriedades(metodoDePagamento, itens) {
        if (!this.formasDePagamento.includes(metodoDePagamento))
            throw 'Forma de pagamento inválida!'
        if (itens == 0)
            throw 'Não há itens no carrinho de compra!'
    }

    adicionaMeioDePagamento(metodoDePagamento, total) {
        if (metodoDePagamento == 'dinheiro')
            return total / 100 * 95

        if (metodoDePagamento == 'credito')
            return total / 100 * 103

        return total
    }

    calcularPrecoNoCarrinho() {
        let total = 0
        for (const item of Object.keys(this.carrinho)) {
            total += this.cardapio[item] * this.carrinho[item]
        }
        return total
    }

    validaItensExtras() {
        for (const item of Object.keys(this.carrinho)) {
            if (item == 'chantily') {
                this.verificaSeContemItemPrincipal('cafe')
            }
            if (item == 'queijo') {
                this.verificaSeContemItemPrincipal('sanduiche')
            }
        }
    }

    verificaSeContemItemPrincipal(nome) {
        if (!this.carrinho.hasOwnProperty(nome))
            throw 'Item extra não pode ser pedido sem o principal'
    }

    addItensNoCarrinho(itens){
        for (const item of itens) {
            const [nome, quantidade] = item.split(',')

            this.validaQuantidade(quantidade)

            if (this.verificaSeItemExiste(nome)) {
                this.carrinho[nome] = quantidade
            }
        }
    }

    verificaSeItemExiste(nomeDoItem) {
        if (this.cardapio.hasOwnProperty(nomeDoItem))
            return true
        throw 'Item inválido!'
    }

    validaQuantidade(quantidade) {
        if (quantidade == 0)
            throw 'Quantidade inválida!'
        if (quantidade == null)
            throw 'Item inválido!'
    }
}

export { CaixaDaLanchonete };
