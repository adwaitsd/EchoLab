import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="close-cart-btn">
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} strokeWidth={1} color="#a0a0a0" />
              <p>Your cart is currently empty.</p>
              <button onClick={onClose} className="btn-primary" style={{marginTop: '1.5rem'}}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-container">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <p className="cart-taxes">Taxes and shipping calculated at checkout.</p>
            <button className="btn-primary checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
