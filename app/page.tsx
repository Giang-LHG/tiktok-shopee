import ProductList from "@/components/ProductList";
import StickyBar from "@/components/StickyBar";
import products from "@/data/products.json";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        {/* ===== HERO HEADER ===== */}
        <header className="hero-header">
          {/* Avatar */}
          <div className="avatar-wrap">
            <div className="avatar">
              <span className="avatar-emoji">🛍️</span>
            </div>
            <div className="live-dot" aria-hidden="true"></div>
          </div>

          {/* Channel name */}
          <h1 className="channel-name">Đồ Hay TikTok</h1>
          <p className="channel-handle">@dohay.tiktok</p>

          {/* Description */}
          <p className="channel-desc">
            Tổng hợp các món đang viral, giá tốt trên Shopee 👇
          </p>

          {/* Stats row */}
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">128K</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">4.8⭐</span>
              <span className="stat-label">Đánh giá</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">Daily</span>
              <span className="stat-label">Cập nhật</span>
            </div>
          </div>

          {/* Main CTA */}
          <a href="#products" className="btn-hero">
            🔥 Xem deal hot hôm nay
          </a>

          {/* Trust badges */}
          <div className="trust-row">
            <span className="trust-badge">✅ Link xịn</span>
            <span className="trust-badge">🚀 Ship nhanh</span>
            <span className="trust-badge">💯 Giá tốt</span>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main className="main-content">
          <div className="section-heading">
            <h2 className="section-title">🔥 Đồ Hay TikTok</h2>
            <p className="section-subtitle">
              Tổng hợp các món đang viral, giá tốt trên Shopee 👇
            </p>
          </div>

          <ProductList products={products} />
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="site-footer">
          <p className="footer-text">
            🔗 Link được cập nhật mỗi ngày.
          </p>
          <p className="footer-text">
            Follow TikTok để xem review mới nhất! 🎵
          </p>
          <a
            href="https://tiktok.com/@dohay.tiktok"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-tiktok-link"
          >
            🎵 Follow @dohay.tiktok
          </a>
          <p className="footer-copy">
            © 2025 Đồ Hay TikTok · Shopee Affiliate
          </p>
        </footer>

        {/* STICKY BAR - mobile only */}
        <StickyBar />
      </div>
    </>
  );
}
