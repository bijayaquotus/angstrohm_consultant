import Hero from "../components/section/home/Hero";
import ServicesWhatWeDo from "../components/section/home/ServicesWhatWeDo";
import StartProject from "../components/section/home/StartProject";
 
export default function HomePage() {
  return (
    <div className="Home bg-[#f4f7f6]">
      <Hero />
      <ServicesWhatWeDo />
      <StartProject />
    </div>
  );
}