import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efeff4]">
      <Navbar />
      <HeroSection />
    </main>
  );
}
``