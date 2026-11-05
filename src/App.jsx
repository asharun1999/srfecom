import { useState } from 'react'
import { categories, products, formatPrice } from './data/products'
import './App.css'

function Stars({ rating }) {
  return <span className="stars">★ {rating}</span>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState([])

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const addToCart = (product) => setCart((c) => [...c, product.id])

  return (
    <>
      <header className="navbar">
        <div className="logo">🛒 SRF Ecom</div>
        <nav>
          {categories.map((c) => (
            <button
              key={c.id}
              className={activeCategory === c.id ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </nav>
        <div className="cart">🛍️ Cart ({cart.length})</div>
      </header>

      <section className="hero">
        <h1>Everything You Need, One Store</h1>
        <p>Sofas, modular kitchens, school bags & more — best prices, fast delivery.</p>
      </section>

      <main className="grid">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            {p.badge && <span className="badge">{p.badge}</span>}
            <div className="product-icon">{p.icon}</div>
            <h3>{p.name}</h3>
            <Stars rating={p.rating} />
            <div className="card-footer">
              <span className="price">{formatPrice(p)}</span>
              <button className="add-btn" onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>© 2026 SRF Ecom — All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
