import CategoriesList from "./CategoriesList";

function CategoriesSection({ products }) {
    return(
        <section className="categories-section">
            <div className="categories-container">
                <h2 className="title">categorias</h2>
                <CategoriesList products={products} />
            </div>
        </section>
    );
}

export default CategoriesSection;