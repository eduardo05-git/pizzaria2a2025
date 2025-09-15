const Produtos = () => {

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa',
        'Pizza de Frango'
        

    ]

// Iteração da lista de pizzas
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);
    return (
        <div>
            <h3> Listagem De Produtos</h3>

            <ul>
               {listaPizzas}
            </ul>

        </div>
    )
}

export default Produtos