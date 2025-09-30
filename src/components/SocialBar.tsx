export default function SocialBar() {
  return (
    <section
      className=""
      style={{
        background: "linear-gradient(180deg, #D9EBFF 0%, #CFE7FF 100%)",
      }}
    >
      <div className="container-px mx-auto max-w-7xl py-8 sm:py-10 text-center">
        <p className="text-[#1994FF] font-bold">Dapatkan info dan update terbaru di media sosial kami!</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[#1994FF] font-medium">
          <a href="#" className="hover:underline flex items-center gap-2">📷 @winvest.id</a>
          <a href="#" className="hover:underline flex items-center gap-2">▶️ winvest_id</a>
          <a href="#" className="hover:underline flex items-center gap-2">🎵 @winvest_id</a>
          <a href="#" className="hover:underline flex items-center gap-2">𝕏 @winvest.id</a>
        </div>
      </div>
    </section>
  );
}
