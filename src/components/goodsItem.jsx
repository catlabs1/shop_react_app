function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-titile">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    В корзину
                </button>
                <span className="price-text"><span className="price-sum">{price}</span> v-bucks</span>
                {/* у первого span был класс right */}
            </div>
        </div>
    );
}

export { GoodsItem };
