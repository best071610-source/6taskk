function ProductItem({ item, onDelete }) {
    return (
        <div className="item-row">
            <div className="item-left">
                <span className="item-dot"></span>
                <span className="item-label">{item.name}</span>
            </div>
            <div className="item-right">
                <span className="price-pill">{item.price} сом</span>
                <button
                    onClick={() => onDelete(item.id)}
                    className="delete-action-btn"
                    title="Удалить позицию"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default ProductItem;