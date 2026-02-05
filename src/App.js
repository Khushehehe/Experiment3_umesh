import './App.css';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="app">
      <ProductCard
        name="Wireless Headphones"
        price={2999}
        image="https://via.placeholder.com/200"
        inStock={true}
      />

      <ProductCard
        name="Smart Watch"
        price={4999}
        image="https://via.placeholder.com/200"
        inStock={false}
      />
    </div>
  );
}

export default App;
