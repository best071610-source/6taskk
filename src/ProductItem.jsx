function ProductItem({ item, onDelete }) {
    return (
        <div className="item-card">
            <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price} сом</span>
            </div>
            <button onClick={() => onDelete(item.id)} className="delete-btn">
                Удалить
            </button>
        </div>
    );
}

export default ProductItem;
