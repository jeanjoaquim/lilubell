function ProductsItem({ item }) {

    const priceFormat = `R$${item.price},00`;

    return(
        <li className="product-item">
            <div className="product-thumb"></div>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{priceFormat}</p>
        </li>
    );
}

export default ProductsItem;