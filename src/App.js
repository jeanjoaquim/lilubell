import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductData from './data/ProductData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import './styles.css';

function App() {

    const [Products, setProducts] = useState(ProductData);

    return(
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <HeroSection />
                            <ProductSection products={Products} />
                        </>
                    }></Route>

                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/user' element={<UserPage />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;