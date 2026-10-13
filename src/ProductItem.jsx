function ProductItem({ item, onDelete }) {
    return (
        <div className="product-row">
            <span className="product-title">{item.name}</span>
            <div className="product-actions">
                <span className="price-tag">{item.price} сом</span>
                <button
                    onClick={() => onDelete(item.id)}
                    className="remove-btn"
                    title="Удалить"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default ProductItem;