"use client";

export default function StickyBar() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky-bar" role="complementary" aria-label="Nút xem deal nhanh">
      <button
        onClick={scrollToProducts}
        className="sticky-btn"
        aria-label="Xem deal hot hôm nay"
      >
        🔥 Xem deal hot hôm nay
      </button>
    </div>
  );
}
