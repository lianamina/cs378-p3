import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];



function App() {
  const [cart, setCart] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [orderSummary, setOrderSummary] = useState('');

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart, [id]: prevCart[id] - 1 };
      if (updatedCart[id] <= 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      setOrderSummary('No items in cart');
    } else {
      let summary = 'Order Summary:\n';
      let total = 0;
      Object.keys(cart).forEach((id) => {
        const item = menuItems.find((item) => item.id === parseInt(id));
        summary += `${item.title} x${cart[id]} - $${(cart[id] * item.price).toFixed(2)}\n`;
        total += cart[id] * item.price;
      });
      summary += `Total: $${total.toFixed(2)}`;
      setOrderSummary(summary);
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const totalAmount = Object.keys(cart).reduce((sum, id) => sum + cart[id] * menuItems.find(item => item.id === parseInt(id)).price, 0);

  return (
    <div className="container menu-background">
      <MenuHeader
        title="Tokyo Restaurant"
        logo="restaurant_logo.jpg"
        description="Delicious, From-Scratch Recipes"
        tagline="Gourmet Japanese Cuisine!"
      />
      <div className="row">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            {...item} 
            count={cart[item.id] || 0} 
            addToCart={() => addToCart(item.id)}
            removeFromCart={() => removeFromCart(item.id)}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total: ${totalAmount.toFixed(2)}</p>
        <button className="menu-item-button" onClick={handleOrder}>Order</button>
        <button className="menu-item-button" onClick={clearCart}>Clear All</button>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content popup-centered">
            <h2>Order Summary</h2>
            <pre>{orderSummary}</pre>
            <button className="menu-item-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
