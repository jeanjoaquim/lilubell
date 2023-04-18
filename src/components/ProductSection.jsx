import {useState} from 'react';
import Tabs from './Tabs';
import ProductsList from './ProductsList';
import Pagination from './Pagination';

function ProductSection({ products }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    
    const paginate = (e, pageNumber) => {
        setCurrentPage(pageNumber);
        e.preventDefault();
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <section className='bg-content-section'>
            <div className="content-container">
                {/* <Tabs /> */}
                <ProductsList products={currentProducts} />
                <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
            </div>
        </section>
        
    )
}

export default ProductSection;