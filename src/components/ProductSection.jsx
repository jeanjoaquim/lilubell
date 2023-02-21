import Tabs from './Tabs';
import ProductsList from './ProductsList';

function ProductSection({ products }) {
    return (
        <section className='product-section'>
            <Tabs />
            <ProductsList products={products} />
        </section>
        
    )
}

export default ProductSection;