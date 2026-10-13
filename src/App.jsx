import { useState } from 'react';
import ProductItem from './ProductItem';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Круассан', price: 95 },
    { id: 2, name: 'Кофе латте', price: 160 },
    { id: 3, name: 'Авокадо', price: 120 },
  ]);

  const [nameInput, setNameInput] = useState('');
  const [priceInput, setPriceInput] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!nameInput.trim() || !priceInput) return;

    const newProduct = {
      id: Date.now(),
      name: nameInput,
      price: Number(priceInput),
    };

    setProducts([...products, newProduct]);
    setNameInput('');
    setPriceInput('');
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-card">
      <div className="header-row">
        <h2 className="main-title">Мои покупки</h2>
        <span className="count-badge">{products.length} шт.</span>
      </div>

      <form onSubmit={handleAddProduct} className="input-form">
        <div className="inputs-row">
          <input
            type="text"
            placeholder="Товар"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="custom-input input-name"
          />
          <input
            type="number"
            placeholder="Цена"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            className="custom-input input-price"
          />
        </div>
        <button type="submit" className="submit-btn">+ Добавить в список</button>
      </form>

      <div className="products-wrapper">
        {products.length === 0 ? (
          <p className="empty-state">Список покупок пока пуст</p>
        ) : (
          products.map(product => (
            <ProductItem 
              key={product.id} 
              item={product} 
              onDelete={handleDeleteProduct} 
            />
          ))
        )}
      </div>

      <div className="summary-box">
        <span className="summary-label">Общая сумма:</span>
        <span className="summary-amount">{totalPrice} сом</span>
      </div>
    </div>
  );
}

export default App;