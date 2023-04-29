import cartIcon from'../carticon.png';
function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;

    return (
        <div
            className="cart teal white-text lighten-2"
            onClick={handleBasketShow}
        >
            {/* <i className="material-icons">shopping_basket</i> */}
            <img src={cartIcon} alt="shopping_basket" />
            {quantity ? (
                <span className="card-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
