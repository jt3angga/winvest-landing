import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-px mx-auto max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo-winvest.png" alt="Winvest" width={120} height={34} />
          <span className="text-sm text-slate-600">© {new Date().getFullYear()} Winvest</span>
        </div>
        <div className="flex items-center gap-4 text-slate-600 text-sm">
          <a href="#" className="hover:text-blue-600">@winvest.id</a>
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
