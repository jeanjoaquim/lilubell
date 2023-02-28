import CategoriesItem from "./CategoriesItem";

function CategoriesList({ products }) {
    return(
        <ul className="categories-list">
            {products.map((item) => (
                <CategoriesItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default CategoriesList;