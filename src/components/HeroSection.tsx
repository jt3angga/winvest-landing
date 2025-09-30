import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-hero text-white h-[100vh] md:h-[100dvh] min-h-screen overflow-hidden flex items-end justify-center pl-4 pr-4 pt-8">
      {/* Mobile stacked badges (independent from arms) */}
      <div className="md:hidden pointer-events-none select-none absolute top-24 inset-x-0 flex flex-col items-center gap-4">
        <div className="badge-speech rotate-[-8deg] text-center max-w-[85%]">
          <span className="text-[#1994FF] text-[22px] font-parafina-bold">TRADING </span>
          <span className="text-[#0D4A7E] text-[22px] font-parafina-bold">TANPA </span>
          <span className="text-[#0D4A7E] text-[22px] font-parafina-bold">MODAL?</span>
          <span className="block text-[#1994FF] text-[22px] font-parafina-bold">BISA BANGET!</span>
        </div>
        <div className="badge-speech rotate-[6deg] text-center max-w-[85%] mt-8">
          <span className="text-[#1994FF] text-[22px] font-parafina-bold">BISA </span>
          <span className="text-[#0D4A7E] text-[22px] font-parafina-bold">TRADING PAKE AI!</span>
          <span className="block text-[#1994FF] text-[22px] font-parafina-bold">SEMUDAH CHAT WA!</span>
        </div>
        <div className="badge-speech rotate-[-4deg] text-center max-w-[85%] mt-8">
          <span className="block text-[#1994FF] text-[22px] font-parafina-bold">TRADING UNTUNG,</span>
          <span className="block text-[#0D4A7E] text-[22px] font-parafina-bold">GAADA RUGINYA!</span>
        </div>
        <div className="badge-speech rotate-[6deg] text-center max-w-[85%] mt-8">
          <span className="block text-[#1994FF] text-[22px] font-parafina-bold">DOWNLOAD SEKARANG!</span>
          <span className="block text-[#0D4A7E] text-[22px] font-parafina-bold">AUTO CUAN 150RB!</span>
        </div>
      </div>
      <div className="relative w-full max-w-[1440px] mx-auto h-full flex items-end justify-center">
        {/* Hero model container with relative positioning for bubbles */}
        <div className="relative w-[900px] max-w-[85%] md:max-w-[70%]">
          {/* Model image */}
          <Image
            src="/assets/hero-model.png"
            alt="Model Winvest"
            width={728}
            height={728}
            priority
            className="w-full h-auto"
          />

          {/* Speech bubbles positioned absolutely relative to model container (desktop/tablet) */}
          <div className="pointer-events-none select-none absolute inset-0 font-bold hidden md:block">
            {/* Top Left - above left hand, arrow at bottom-left points down to hand */}
            <div className="badge-speech text-center speech-tr absolute top-[8%] left-[-15%] -rotate-[15deg] z-10 max-w-[45%]">
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">TRADING</span>
              <span className="block text-[#0D4A7E] text-[32px] font-parafina-bold">TANPA MODAL?</span>
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">BISA BANGET!</span>
            </div>
            {/* Top Right - above right hand, arrow at bottom-right points down to hand */}
            <div className="badge-speech text-center speech-tl absolute top-[6%] right-[-60%] rotate-[12deg] z-10 max-w-[55%]">
              <span className="text-[#1994FF] text-[32px] font-parafina-bold">BISA </span>
              <span className="text-[#0D4A7E] text-[32px] font-parafina-bold">TRADING PAKE AI!</span>
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">SEMUDAH CHAT WA!</span>
            </div>
            {/* Bottom Left - near left elbow */}
            <div className="badge-speech text-center speech-br absolute top-[54%] left-[-74%] rotate-[-10deg] z-10 max-w-[50%]">
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">TRADING UNTUNG,</span>
              <span className="block text-[#0D4A7E] text-[32px] font-parafina-bold">GAADA RUGINYA!</span>
            </div>
            {/* Bottom Right - near right elbow */}
            <div className="badge-speech text-center speech-bl absolute top-[38%] left-[82%] rotate-[8deg] z-10 max-w-[52%]">
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">DOWNLOAD</span>
              <span className="block text-[#1994FF] text-[32px] font-parafina-bold">SEKARANG!</span>
              <span className="block text-[#0D4A7E] text-[32px] font-parafina-bold">AUTO CUAN 150RB!</span>
            </div>
          </div>

          {/* Scroll note */}
          <a href="#intro" className="absolute left-1/2 -translate-x-1/2 bottom-[2%] flex flex-col items-center select-none group">
            <span className="text-white text-center font-medium text-[16px] leading-[22px] sm:text-[18px] sm:leading-[28px] opacity-95 group-hover:opacity-100 transition" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}>
              scroll ke bawah untuk daftar
            </span>
            <Image src="/assets/arrow-down.svg" alt="" width={24} height={24} className="mt-1 w-5 h-5 sm:w-6 sm:h-6 animate-bounce opacity-95 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
