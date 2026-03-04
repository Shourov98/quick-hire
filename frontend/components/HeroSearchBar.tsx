export function HeroSearchBar() {
  return (
    <div className="mt-10 w-full max-w-[940px] bg-white p-4 shadow-[0_12px_24px_rgba(37,50,75,0.08)] md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex flex-1 items-center gap-4 border-b border-[#dbe0ea] pb-3 md:pb-2">
          <span aria-hidden="true" className="text-3xl text-[#25324b]">
            &#128269;
          </span>
          <span className="text-[18px] text-[#b1b8c9] md:text-[32px]">
            Job title or keyword
          </span>
        </div>

        <div className="flex flex-1 items-center gap-4 border-b border-[#dbe0ea] pb-3 md:pb-2">
          <span aria-hidden="true" className="text-3xl text-[#25324b]">
            &#128205;
          </span>
          <span className="text-[18px] text-[#3f4a61] md:text-[32px]">
            Florence, Italy
          </span>
          <span className="ml-auto text-2xl text-[#7b8497]">&#709;</span>
        </div>

        <button
          type="button"
          className="h-14 shrink-0 bg-[#4640de] px-8 text-[24px] font-semibold text-white transition-colors hover:bg-[#3b34c8] md:h-[72px] md:px-9 md:text-[36px]"
        >
          Search my job
        </button>
      </div>
    </div>
  );
}
