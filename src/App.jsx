import { useState } from 'react';
import ProductItem from './ProductItem';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Сыр Моцарелла', price: 210 },
    { id: 2, name: 'Оливковое масло', price: 340 },
    { id: 3, name: 'Свежий базилик', price: 45 },
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
    <div className="planner-card">
      <div className="planner-header">
        <h2 className="planner-title">Список покупок</h2>
        <p className="planner-subtitle">Учет планируемых расходов</p>
      </div>

      <form onSubmit={handleAddProduct} className="planner-form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Наименование"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="eco-input"
          />
          <input
            type="number"
            placeholder="Цена (сом)"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            className="eco-input"
          />
        </div>
        <button type="submit" className="eco-submit-btn">Добавить в корзину</button>
      </form>

      <div className="items-list">
        {products.length === 0 ? (
          <p className="items-empty">Корзина пуста</p>
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

      <div className="stats-footer">
        <span className="stats-count">Позиций: {products.length}</span>
        <div className="stats-total-wrap">
          <span className="stats-total-text">Итого:</span>
          <span className="stats-total-val">{totalPrice} сом</span>
        </div>
      </div>
    </div>
  );
}

export default App;