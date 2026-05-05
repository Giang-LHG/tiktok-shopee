import ProductList from "@/components/ProductList";
import StickyBar from "@/components/StickyBar";
import products from "@/data/products.json";

const profile = {
  name: "Creator Setup VN",
  handle: "@creatorsetupvn",
  tiktokUrl: "https://tiktok.com/@creatorsetupvn",
  bio: "🎥 Setup cho content creator\n🎙️ Mic • Đèn • Camera • Desk setup\n🛒 Gear đáng tiền mỗi ngày",
};

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <header className="hero-header">
          <div className="avatar-wrap">
            <div className="avatar">
              <span className="avatar-emoji">🎙️</span>
            </div>
            <div className="live-dot" aria-hidden="true"></div>
          </div>

          <h1 className="channel-name">{profile.name}</h1>
          <p className="channel-handle">{profile.handle}</p>

          <p className="channel-desc">{profile.bio}</p>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">Setup</span>
              <span className="stat-label">Creator</span>
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

          <a href="#products" className="btn-hero">
            🔥 Xem gear setup hôm nay
          </a>

          <div className="trust-row">
            <span className="trust-badge">✅ Link xịn</span>
            <span className="trust-badge">🎙️ Gear creator</span>
            <span className="trust-badge">💯 Đáng tiền</span>
          </div>
        </header>

        <main className="main-content">
          <div className="section-heading">
            <h2 className="section-title">🎥 Creator Setup VN</h2>
            <p className="section-subtitle">
              Mic, đèn, camera và đồ desk setup đáng tiền cho content creator.
            </p>
          </div>

          <ProductList products={products} />
        </main>

        <footer className="site-footer">
          <p className="footer-text">
            🔗 Link được cập nhật mỗi ngày.
          </p>
          <p className="footer-text">
            Follow TikTok để xem review setup mới nhất! 🎵
          </p>
          <a
            href={profile.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-tiktok-link"
          >
            🎵 Follow {profile.handle}
          </a>
          <p className="footer-copy">
            © 2026 Creator Setup VN · Shopee Affiliate
          </p>
        </footer>

        <StickyBar />
      </div>
    </>
  );
}
