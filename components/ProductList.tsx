import ProductCard, { Product } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  if (!products || products.length === 0) {
    return (
      <p className="empty-msg">Chưa có sản phẩm nào. Quay lại sau nhé! 😊</p>
    );
  }

  return (
    <section id="products" className="product-section" aria-label="Danh sách sản phẩm">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
