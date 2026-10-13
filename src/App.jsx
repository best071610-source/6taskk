import { useState } from 'react';
import ProductItem from './ProductItem';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Молоко', price: 85 },
    { id: 2, name: 'Хлеб', price: 30 },
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
    <div className="shopping-container">
      <h2 className="title">Список покупок</h2>

      {/* Форма добавления */}
      <form onSubmit={handleAddProduct} className="shopping-form">
        <input
          type="text"
          placeholder="Название товара"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="shopping-input"
        />
        <input
          type="number"
          placeholder="Цена (сом)"
          value={priceInput}
          onChange={(e) => setPriceInput(e.target.value)}
          className="shopping-input"
        />
        <button type="submit" className="add-btn">Добавить товар</button>
      </form>

      {/* Список товаров */}
      <div className="list-container">
        {products.length === 0 ? (
          <p className="empty-text">Список пуст</p>
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

      {/* Итоговая стоимость */}
      <div className="total-block">
        <span className="total-label">Итого:</span>
        <span className="total-sum">{totalPrice} сом</span>
      </div>
    </div>
  );
}

export default App;