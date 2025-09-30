import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#E8F2FF] overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="container-px mx-auto max-w-[1440px] w-full">
        <h3 className="text-center text-[#1994FF] font-extrabold tracking-[0.02em] text-[24px] sm:text-[26px] md:text-[32px]">
          FITUR UNGGULAN WINVEST
        </h3>

        {/* Cards 2x2 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="rounded-[24px] bg-white border border-[#E6ECF5] shadow-[0_8px_20px_rgba(31,111,255,0.12)] p-5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 items-center">
              <Image src="/assets/ic-stats.png" alt="Beli & Jual Saham Instan" width={160} height={160} className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto mx-auto" />
              <div>
                <h4 className="text-[#1994FF] font-extrabold text-[18px] sm:text-[20px] md:text-[22px] leading-snug">Beli & Jual Saham Secara Instan</h4>
                <p className="text-[#1994FF] mt-1 text-[14px] sm:text-[15px]">Akses pasar saham langsung dari genggamanmu.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[24px] bg-white border border-[#E6ECF5] shadow-[0_8px_20px_rgba(31,111,255,0.12)] p-5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 items-center">
              <Image src="/assets/ic-portfolio.png" alt="Cek Portofolio dan Profit Real-Time" width={160} height={160} className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto mx-auto" />
              <div>
                <h4 className="text-[#1994FF] font-extrabold text-[18px] sm:text-[20px] md:text-[22px] leading-snug">Cek Portofolio dan Profit Real‑Time</h4>
                <p className="text-[#1994FF] mt-1 text-[14px] sm:text-[15px]">Lacak kinerja investasimu kapan saja dan secara akurat.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[24px] bg-white border border-[#E6ECF5] shadow-[0_8px_20px_rgba(31,111,255,0.12)] p-5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 items-center">
              <Image src="/assets/ic-stack.png" alt="Customized Watchlist" width={160} height={160} className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto mx-auto" />
              <div>
                <h4 className="text-[#1994FF] font-extrabold text-[18px] sm:text-[20px] md:text-[22px] leading-snug">Advanced Order: Stop Loss & Take Profit</h4>
                <p className="text-[#1994FF] mt-1 text-[14px] sm:text-[15px]">Kendalikan risiko dan amankan keuntungan otomatis.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-[24px] bg-white border border-[#E6ECF5] shadow-[0_8px_20px_rgba(31,111,255,0.12)] p-5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 items-center">
              <Image src="/assets/ic-ai.png" alt="Winvest AI (coming soon)" width={160} height={160} className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto mx-auto" />
              <div>
                <h4 className="text-[#1994FF] font-extrabold text-[18px] sm:text-[20px] md:text-[22px] leading-snug">Winvest AI (coming soon)</h4>
                <p className="text-[#1994FF] mt-1 text-[14px] sm:text-[15px]">Bantu mempermudah transaksi tradingmu secara cepat dan cerdas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
