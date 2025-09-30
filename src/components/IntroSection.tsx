import Image from "next/image";

function StoreButtons() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
      <a href="https://play.google.com/store/apps/details?id=com.waterfrontsekuritas.winvest" target="_blank" aria-label="Get it on Google Play" className="inline-block">
        <Image src="/assets/badge-googleplay.png" alt="Get it on Google Play" width={209} height={62} />
      </a>
      <a href="https://apps.apple.com/us/app/winvest-waterfront-sekuritas/id6752232354" target="_blank" aria-label="Download on the App Store" className="inline-block">
        <Image src="/assets/badge-appstore.png" alt="Download on the App Store" width={209} height={62} />
      </a>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section id="intro" className="bg-hexagon h-screen flex flex-col items-center lg:items-center overflow-hidden relative pt-6 sm:pt-8">

      <div className="container-px mx-auto max-w-[1280px] 2xl:max-w-[1440px] grid lg:grid-cols-2 gap-12 items-center w-full relative">
        <div className="flex flex-col items-center lg:items-start space-y-8 sm:space-y-10 lg:space-y-0">
          {/* Mobile phone preview (moved inside content column) */}
          <div className="lg:hidden flex justify-center">
            <Image src="/assets/phone-watchlist.png" alt="Winvest App Screenshot" width={360} height={540} className="w-[min(75vw,360px)] h-auto drop-shadow-2xl" />
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start mt-2 sm:mt-10 lg:mt-0 relative z-10">
            <Image
              src="/assets/logo-winvest.png"
              alt="Winvest"
              width={399}
              height={100}
              sizes="(max-width: 1024px) 223px, 399px"
              className="w-[223px] lg:w-[399px] h-auto"
            />
          </div>
          <p className="mt-6 text-lg max-w-2xl text-[#1994FF] text-[18px] sm:text-[20px] lg:text-[32px] leading-[28px] sm:leading-[30px] lg:leading-[40px] font-medium text-center lg:text-left">
            Aplikasi investasi saham modern yang memudahkan kamu untuk beli-jual saham secara <span className="font-bold">lengkap, cepat, aman, dan terpercaya.</span>
          </p>
          <div className="mt-4 lg:mt-24 flex flex-col gap-4 items-center lg:items-start">
            <div className="text-[#1994FF] text-[24px] sm:text-[26px] lg:text-[32px] font-parafina-bold uppercase lg:normal-case text-center lg:text-left">
              Download Winvest !
            </div>
            <StoreButtons />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/assets/phone-watchlist.png" alt="Winvest App Screenshot" width={640} height={960} className="mx-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

