import { useState } from 'react';
import ProductData from './data/ProductData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './styles.css';

function App() {

    const [Products, setProducts] = useState(ProductData);

    return(
        <div className='container'>
            <Header />
            <HeroSection />
            <CategoriesSection products={Products} />
            <ProductSection products={Products} />
            <Footer />
        </div>
    );
}

export default App;