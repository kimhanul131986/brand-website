import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import Event from "@/components/Event";
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Reviews from "@/components/Reviews";
import InquiryButton from "@/components/InquiryButton";

export default function Home() {
  return (
    <>
      <Hero />
      <CardGrid />
      <Event />
      <Reviews />
      <About />
      <Delivery />
      <InquiryButton />
    </>
  );
}
