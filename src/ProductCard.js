function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p className="price">₹{price}</p>

      <span className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      <button disabled={!inStock}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
