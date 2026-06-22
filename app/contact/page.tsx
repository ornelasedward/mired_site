import ContactForm from "./ContactForm";
import BookCallSection from "@/components/leads/BookCallSection";
import Faqs from "@/components/common/Faqs";
import { getCalendlyUrl } from "@/lib/site";

const Contact = () => {
  return (
    <div className="relative z-50">
      <BookCallSection
        id="book"
        calendlyUrl={getCalendlyUrl()}
        showContactFallback={false}
      />
      <ContactForm />
      <Faqs />
    </div>
  );
};

export default Contact;
