import Faqs from "@/components/common/Faqs";
import BookCallSection from "@/components/leads/BookCallSection";
import { getCalendlyUrl } from "@/lib/site";

const FaqPage = () => {
  return (
    <div className="relative z-50">
      <Faqs />
      <BookCallSection id="book" calendlyUrl={getCalendlyUrl()} />
    </div>
  );
};

export default FaqPage;
