import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../images/svg/cart.svg';
import HeaderProfileIcon from '../images/user-profile-unsplash.jpg';
import CartMenu from './CartMenu';
import DropdownProfileMenu from './DropdownProfileMenu';

function Header() {

    const [showCart, setShowCart] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showDropdownProfileMenu, setShowDropdownProfileMenu] = useState(false);


    const open = () => {
        setShowCart(true);
    }

    const toggleMenu = () => {
        if(showMobileMenu === false) {
            setShowMobileMenu(true);
        } else {
            setShowMobileMenu(false);
        }
    }

    const showProfileMenu = () => {
        setShowDropdownProfileMenu(true);
    }

    const hideProfileMenu = () => {
        setShowDropdownProfileMenu(false);
    }

    return(
        
        <header>
            {showCart && <CartMenu cart={showCart} show={(showCart) => setShowCart(showCart)} />}
            <div className="header-container">
                <h1 className='logo'>li</h1>
                <form action="" className="header-search-bar">
                    <input type='text' className='input-text' placeholder='Pesquisar...' />
                </form>
                <div className="nav-container-mobile-version">
                    <div className="mobile-header-buttons">
                        <img src={CartIcon} onClick={() => open()} alt='' />
                    </div>
                    <Link to='/user'>
                        <div className="mobile-header-buttons">
                            <img src={HeaderProfileIcon} alt='' />
                        </div>
                    </Link>
                    <span onClick={() => toggleMenu()} className="material-icons burger-menu">menu</span>
                    <div className={`mobile-nav-menu ${showMobileMenu ? 'show-mobile-nav-menu' : 'hide-mobile-nav-menu'}`} >
                        <ul className="mobile-nav-list">
                            <Link to='/'>
                                <li className="mobile-nav-item">
                                    inicio
                                </li>
                            </Link>
                            <li className="mobile-nav-item">
                                produtos
                            </li>
                            <li className="mobile-nav-item">
                                portfolio
                            </li>
                            <Link to='/about'>
                                <li className="mobile-nav-item">
                                    sobre
                                </li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>

                <div className="nav-container-desktop-version">
                    <nav className="nav-menu">
                        <ul className="nav-menu-list">
                            <Link to='/'>
                                <li className="nav-menu-item">início</li>
                            </Link>
                            <li className="nav-menu-item">produtos</li>
                            <li className="nav-menu-item">portfolio</li>
                            <Link to='/about'>
                                <li className="nav-menu-item">sobre</li>
                            </Link>
                            <li className="nav-menu-buttons">
                                <img src={CartIcon} onClick={() => open()} alt='' />
                            </li>
                            <li className="nav-menu-buttons">
                                <Link to='/user'>
                                    <div className="header-buttons">
                                        <img src={HeaderProfileIcon} alt='' />
                                    </div>
                                </Link>
                                {/* <div onMouseLeave={() => hideProfileMenu()} onMouseOver={() => showProfileMenu()} className="header-buttons">
                                    <img src={HeaderProfileIcon} alt='' />
                                    {showDropdownProfileMenu && <DropdownProfileMenu />}
                                </div> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            
        </header>
    );
}

export default Header;