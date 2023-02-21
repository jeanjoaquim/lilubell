import ProductsItem from './ProductsItem';

function ProductsList({ products }) {
    return(
        <ul className='products-list'>
            {products.map((item) => (
                <ProductsItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default ProductsList;