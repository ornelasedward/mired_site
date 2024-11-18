import BookingConsultation from "@/components/common/BookingConsultation";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import HeroArea from "@/components/home/HeroArea";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";

export default function Home() {
  return (
    <main>
      <HeroArea />
      <div className=" py-5">
        <Sponsars />
      </div>
      <ConsultationBookung />
      <DigitalSoluations />
      <Testimonials />
      <Trust />
      <Faqs />
      <BookingConsultation />
    </main>
  );
}
