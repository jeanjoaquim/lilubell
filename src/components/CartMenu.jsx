function CartMenu({ show }) {

    const close = (e) => {
        if(e.target == e.currentTarget) {
            show(false);
        }
    }

    return(
        <div onClick={(e) => close(e)} className="cart-container transparency">
            <div className="cart-menu">
                <div>
                    <div className="close-cart"></div>
                    <p>Meu carrinho <span>(3 items)</span></p>
                </div>
                <ul className="cart-list">
                    <li className="cart-item cart-item-active">
                        <div className="cart-item-thumbnail"></div>
                        <div className="cart-item-description">
                            <div className="cart-item-delete"></div>
                            <h3>Lorem Ipsum</h3>
                            <h3 className="cart-item-price">R$95,00</h3>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-item-thumbnail"></div>
                        <div className="cart-item-description">
                            <div className="cart-item-delete"></div>
                            <h3>Lorem Ipsum</h3>
                            <h3 className="cart-item-price">R$95,00</h3>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-item-thumbnail"></div>
                        <div className="cart-item-description">
                            <div className="cart-item-delete"></div>
                            <h3>Lorem Ipsum</h3>
                            <h3 className="cart-item-price">R$95,00</h3>
                        </div>
                    </li>
                </ul>
                <div className="total-price">
                    <h2>Total</h2>
                    <h2>R$400,00</h2>
                </div>
                <div className="buy-button">
                    <button>Comprar</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartMenu;