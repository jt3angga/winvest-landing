import Image from "next/image";

export default function BonusSection() {
  return (
    <section id="bonus" className="bg-candles h-screen flex items-center overflow-hidden relative">
      <div className="container-px mx-auto max-w-[1440px] text-white w-full relative z-10 flex flex-col items-center pb-[170px] sm:pb-[210px] lg:pb-[240px] xl:pb-[260px]">
        <div className="text-center max-w-[1060px]">
          <h3 className="font-bold tracking-normal text-white text-[28px] sm:text-[36px] md:text-[44px] md:leading-[44px]">
            Jadi Bagian dari Revolusi Investasi Masa Depan!
          </h3>
          <p className="mt-3 text-white/90 mx-auto text-center max-w-[752px] text-[18px] sm:text-[24px] md:text-[32px] leading-[28px] sm:leading-[36px] md:leading-[40px] font-normal">
            Gabung sebagai 100 pengguna pertama dan raih berbagai bonus spesial :
          </p>
        </div>

        {/* Bullets row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[920px]">
          <div className="mx-auto sm:mx-0 w-full max-w-[92%] sm:max-w-[454px] flex items-start sm:items-center justify-start sm:justify-center gap-3 text-white text-[20px] sm:text-[26px] md:text-[32px] leading-[32px] sm:leading-[44px] font-bold">
            <span role="img" aria-label="money" className="text-yellow-300">💰</span>
            <span>Bonus saldo RDN hingga Rp150.000</span>
          </div>
          <div className="mx-auto sm:mx-0 w-full max-w-[92%] sm:max-w-[454px] flex items-start sm:items-center justify-start sm:justify-center gap-3 text-white text-[20px] sm:text-[26px] md:text-[32px] leading-[32px] sm:leading-[44px] font-bold">
            <span role="img" aria-label="lock" className="text-blue-100">🔒</span>
            <span>Tarik keuntungan dari hasil investasimu</span>
          </div>
        </div>

      </div>

      {/* Three phones image anchored at bottom (all breakpoints) */}
      <div className="absolute inset-x-0 bottom-[-6px] sm:bottom-[-8px] lg:bottom-[-12px] xl:bottom-[-14px] z-20 w-full flex justify-center pointer-events-none select-none">
        <Image
          src="/assets/three-hp.png"
          alt="Winvest App - tiga perangkat"
          width={1100}
          height={520}
          sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1100px"
          className="w-[min(96vw,1100px)] h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}

