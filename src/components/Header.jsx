function Header() {
    return(
        <header>
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
                        <li className="nav-menu-item">contato</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;