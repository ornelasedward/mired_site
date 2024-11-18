import TestimonialCard from "./TextimonialCard";

const Testimonials = () => {
  return (
    <div className="my-16 container">
      <div className="mb-12">
        <h2 className="heading-1 text-center text-3xl md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="text-center text-xl mt-2">Real stories. Real results.</p>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
