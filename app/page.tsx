import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Reviews from "@/components/Reviews";
import InquiryButton from "@/components/InquiryButton";

export default function Home() {
  return (
    <>
      <Hero />
      <CardGrid />
      <Reviews />
      <About />
      <Delivery />
      <InquiryButton />
    </>
  );
}
