import { useState } from 'react';
import CartMenu from './CartMenu';

function Header() {

    const [showCart, setShowCart] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const open = () => {
        setShowCart(true);
    }

    const toggleMenu = () => {
        if(showMobileMenu == false) {
            setShowMobileMenu(true);
        } else {
            setShowMobileMenu(false);
        }
        
    }

    return(
        
        <header>
            {showCart && <CartMenu cart={showCart} show={(showCart) => setShowCart(showCart)} />}
            <div className="header-container">
                <h1 className='logo'>li</h1>
                <form action="" className="search-bar">
                    <input type='text' className='input-text' placeholder='Pesquisar...' />
                </form>
                <div className="mobile-version">
                    <div className="mobile-header-buttons"></div>
                    <div className="mobile-header-buttons"></div>
                    <span onClick={() => toggleMenu()} className="material-icons burger-menu">menu</span>
                    <div className={`mobile-nav-menu ${showMobileMenu ? 'show-mobile-nav-menu' : 'hide-mobile-nav-menu'}`} >
                        <ul className="mobile-nav-list">
                            <li className="mobile-nav-item">
                                inicio
                            </li>
                            <li className="mobile-nav-item">
                                produtos
                            </li>
                            <li className="mobile-nav-item">
                                sobre
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="desktop-version">
                    <nav className="nav-menu">
                        <ul className="nav-menu-list">
                            <li className="nav-menu-item">início</li>
                            <li className="nav-menu-item">produtos</li>
                            <li className="nav-menu-item">sobre</li>
                            <li className="nav-menu-buttons">
                                <button onClick={() => open()} className="header-buttons"></button>
                            </li>
                            <li className="nav-menu-buttons">
                                <button className="header-buttons"></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            
        </header>
    );
}

export default Header;