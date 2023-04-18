function Pagination({ productsPerPage, totalProducts, paginate }) {

    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <>
        <nav>
            <ul className="page-buttons-container">
                {pageNumbers.map(number => (
                    <li key={number} className='page-buttons'>
                        <a onClick={(e) => paginate(e, number)} href='!#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        {/* <div className="page-buttons-container">
            <button className="page-buttons">1</button>
            <button className="page-buttons">2</button>
            <button className="page-buttons">3</button>
        </div> */}
        </>
    );
}

export default Pagination;