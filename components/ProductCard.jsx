export default function ProductCard({ product }) {
  return (
    <div className="service-card">
      <img src={product.image} alt={product.title} />

      <div className="service-content">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}