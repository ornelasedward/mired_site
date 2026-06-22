import BookCallSection from "@/components/leads/BookCallSection";
import { getCalendlyUrl } from "@/lib/site";

const BookingConsultation = () => {
  return <BookCallSection variant="dark" calendlyUrl={getCalendlyUrl()} />;
};

export default BookingConsultation;
