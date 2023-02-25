import Tabs from './Tabs';
import ProductsList from './ProductsList';

function ProductSection({ products }) {
    return (
        <section className='product-section'>
            <div className="product-container">
                <Tabs />
                <ProductsList products={products} />
            </div>
        </section>
        
    )
}

export default ProductSection;