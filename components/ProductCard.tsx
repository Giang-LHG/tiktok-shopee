"use client";

import Image from "next/image";
import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
  badge: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);

  return (
    <article className="product-card">
      {/* Product Image */}
      <div className="product-img-wrap">
        <Image
          src={imgSrc}
          alt={product.name}
          width={400}
          height={300}
          className="product-img"
          loading="lazy"
          onError={() =>
            setImgSrc(
              `https://placehold.co/400x300/ffe0e0/ff4444?text=${encodeURIComponent(
                product.name.slice(0, 12)
              )}`
            )
          }
        />
        <span className="badge">{product.badge}</span>
      </div>

      {/* Product Info */}
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">🏷️ Chỉ {product.price}</span>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shopee"
            aria-label={`Xem ${product.name} trên Shopee`}
          >
            👉 Xem trên Shopee
          </a>
        </div>
      </div>
    </article>
  );
}
