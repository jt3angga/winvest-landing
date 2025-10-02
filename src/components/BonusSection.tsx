import Image from "next/image";

export default function BonusSection() {
  return (
    <section id="bonus" className="bg-candles h-auto md:h-screen flex items-center overflow-hidden relative">
      <div className="container-px mx-auto max-w-[1440px] text-white w-full relative z-30 flex flex-col items-center pt-8 pb-[150px] sm:pt-1 sm:pb-[320px] lg:pt-[0] lg:pb-24">
        <div className="text-center max-w-[1060px]">
          <h3 className="font-bold tracking-normal text-white text-[22px] sm:text-[30px] md:text-[38px] leading-[28px] sm:leading-[38px] md:leading-[44px]">
            Jadi Bagian dari Revolusi Investasi Masa Depan!
          </h3>
          <p className="mt-2 text-white/90 mx-auto text-center max-w-[680px] text-[15px] sm:text-[18px] md:text-[22px] leading-[22px] sm:leading-[28px] md:leading-[32px] font-normal">
            Gabung sebagai 100 pengguna pertama dan raih<br />berbagai bonus spesial :
          </p>
        </div>

        {/* Bullets row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[860px]">
          <div className="mx-auto sm:mx-0 w-full max-w-[92%] sm:max-w-[454px] flex items-start sm:items-center justify-start sm:justify-center gap-3 text-white text-[16px] sm:text-[20px] md:text-[26px] leading-[24px] sm:leading-[32px] md:leading-[36px] font-bold">
            <span role="img" aria-label="money" className="text-yellow-300">💰</span>
            <span>Bonus saldo RDN hingga Rp150.000</span>
          </div>
          <div className="mx-auto sm:mx-0 w-full max-w-[92%] sm:max-w-[454px] flex items-start sm:items-center justify-start sm:justify-center gap-3 text-white text-[16px] sm:text-[20px] md:text-[26px] leading-[24px] sm:leading-[32px] md:leading-[36px] font-bold">
            <span role="img" aria-label="lock" className="text-blue-100">🔒</span>
            <span>Tarik keuntungan dari hasil investasimu</span>
          </div>
        </div>

      </div>

      {/* Three phones image anchored at bottom (all breakpoints) */}
      <div className="absolute inset-x-0 bottom-[0px] sm:bottom-[0px] lg:bottom-[0px] xl:bottom-[0px] z-10 w-full flex justify-center pointer-events-none select-none">
        <Image
          src="/assets/three-hp.png"
          alt="Winvest App - tiga perangkat"
          width={1100}
          height={520}
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 82vw, 1100px"
          className="w-[min(72vw,1100px)] h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}

