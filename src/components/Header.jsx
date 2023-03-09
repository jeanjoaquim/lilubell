import { useState } from 'react';
import CartMenu from './CartMenu';

function Header() {

    const [showCart, setShowCart] = useState(false);

    const open = () => {
        setShowCart(true);
    }

    return(
        
        <header>
            {showCart && <CartMenu cart={showCart} show={(showCart) => setShowCart(showCart)} />}
            <h1 className='logo'>lilubell</h1>
            <form action="" className="search-bar">
                <input type='text' className='input-text' placeholder='Pesquisar...' />
            </form>
            <div className="mobile-version">
                <span className="material-icons burger-menu">menu</span>
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
            
        </header>
    );
}

export default Header;