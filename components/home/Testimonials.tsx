import TestimonialCard from "./TextimonialCard";

const Testimonials = () => {
  return (
    <div className="my-16 container">
      <div className="mb-12">
        <h2 className="heading-1">What Our Clients Say</h2>
        <p className="text-center mt-2">Testimonials that speak volumes</p>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
