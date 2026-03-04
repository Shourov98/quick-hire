import Image from "next/image";

export function Navbar() {
  return (
    <header className="border-t border-dotted border-[#6359d7] bg-[#efeff4]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-5 px-5 py-3.5 md:flex-nowrap md:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/Header/Logo.svg"
            alt="QuickHire logo"
            width={152}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        <nav className="order-3 flex w-full items-center gap-8 text-[22px] font-medium text-[#444f66] md:order-none md:w-auto md:pl-8">
          <a href="#" className="transition-colors hover:text-[#2f3b56]">
            Find Jobs
          </a>
          <a href="#" className="transition-colors hover:text-[#2f3b56]">
            Browse Companies
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-4 text-[24px] font-semibold">
          <a
            href="#"
            className="text-[#4338ca] transition-colors hover:text-[#342cb5]"
          >
            Login
          </a>
          <span aria-hidden="true" className="h-9 w-px bg-[#d3d4de]" />
          <a
            href="#"
            className="rounded-sm bg-[#4338ca] px-6 py-2.5 text-white transition-colors hover:bg-[#342cb5]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
