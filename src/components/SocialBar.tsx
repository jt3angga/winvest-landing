import Image from "next/image";

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
          <a href="https://www.instagram.com/winvest.id/" target="_blank" className="hover:underline flex items-center gap-1">
            <Image src="/assets/ig.svg" alt="Instagram" width={24} height={24} />
            @winvest.id</a>
          <a href="https://www.youtube.com/@winvest_id" target="_blank" className="hover:underline flex items-center gap-1">
            <Image src="/assets/youtube.svg" alt="Youtube" width={24} height={24} />
            winvest_id</a>
          <a href="https://www.tiktok.com/@winvest.id" target="_blank" className="hover:underline flex items-center gap-1">
            <Image src="/assets/tiktok.svg" alt="Tiktok" width={19.5} height={20.25} />
            @winvest_id</a>
          <a href="https://x.com/winvest_id" target="_blank" className="hover:underline flex items-center gap-1">
            <Image src="/assets/x.svg" alt="X" width={24} height={24} />
            @winvest.id</a>
        </div>
      </div>
    </section>
  );
}
