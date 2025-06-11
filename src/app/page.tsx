import Navbar from "@/components/navbar";
import FirstWhiteSection from "@/components/firstwhitesection";
import SecondBlackSection from "@/components/secondblacksection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstWhiteSection />
      <SecondBlackSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
