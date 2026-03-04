import Image from "next/image";
import { HeroSearchBar } from "@/components/HeroSearchBar";

export function HeroSection() {
  return (
    <section className="relative">
      <Image
        src="/Header/Pattern.svg"
        alt=""
        width={997}
        height={794}
        className="pointer-events-none absolute right-[-170px] top-[-46px] z-0 h-auto w-[960px] max-w-none opacity-90"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-8 px-5 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-8 md:pb-0 md:pt-10">
        <div className="max-w-[640px]">
          <Image
            src="/Header/Title.svg"
            alt="Discover more than 5000+ Jobs"
            width={533}
            height={290}
            priority
            className="h-auto w-full max-w-[533px]"
          />

          <p className="mt-5 max-w-[610px] text-[20px] leading-[1.45] text-[#7b8497] md:text-[38px]">
            Great platform for the job seeker that searching for new career
            hights and passionate about startups.
          </p>

          <HeroSearchBar />

          <p className="mt-5 text-[18px] leading-[1.45] text-[#5f6778] md:text-[32px]">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/Header/user.png"
            alt="Smiling job seeker"
            width={827}
            height={1142}
            className="h-auto w-full max-w-[500px] md:max-w-[530px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
