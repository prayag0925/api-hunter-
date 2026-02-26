function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p><strong>Brand:</strong> {product.brand}</p>

        <p><strong>Price:</strong> ${product.price}</p>

        <p><strong>Rating:</strong>  {product.rating}</p>

        <p><strong>Stock:</strong> {product.stock}</p>
      </div>

    </div>
  );
}

export default ProductCard;