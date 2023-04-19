import { Link } from 'react-router-dom';


function DropdownProfileMenu() {
    return(
        <div className="dropdown-profile-menu-container">
            <Link to='/user'>
                <div className="dropdown-user-profile-container">
                    <div className="dropdown-user-thumbnail"></div>
                    <div className="dropdown-user-name">User Name</div>
                </div>
            </Link>
            
            <ul className="dropdown-menu-list">
                <li className="dropdown-menu-list-item">compras</li>
                <li className="dropdown-menu-list-item">configurações</li>
                <li className="dropdown-menu-list-item">sair</li>
            </ul>
        </div>
    );
}

export default DropdownProfileMenu;