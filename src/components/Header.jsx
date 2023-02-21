function Header() {
    return(
        <header>
            <h1 className='logo'>lillubel</h1>
            <form action="" className="search-bar">
                <input type='text' className='input-text' placeholder='Pesquisar...' />
            </form>
            <span class="material-icons burger-menu">menu</span>
        </header>
    );
}

export default Header;