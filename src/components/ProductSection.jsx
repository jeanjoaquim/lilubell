import Tabs from './Tabs';
import ProductsList from './ProductsList';
import PageButtons from './PageButtons';

function ProductSection({ products }) {
    return (
        <section className='bg-content-section'>
            <div className="content-container">
                {/* <Tabs /> */}
                <ProductsList products={products} />
                <PageButtons />
            </div>
        </section>
        
    )
}

export default ProductSection;