// import RenderCard from "./components/ReviewCard";
// import reviewData from "./data/reviewData";
import "./styles/animation.css";
import ReviewCard from "./components/ReviewCard";
import reviewsData from "./data/reviewData";

const Reviews = () => {
  const testimonials = reviewsData;

  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" },
  ];

  return (
    <>
      <section className="theme-section-soft relative overflow-hidden py-20 sm:py-24 px-4 sm:px-8 md:px-10 lg:px-16 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,101,205,0.08),transparent_60%)] pointer-events-none"></div>
        <div className="space-y-6 w-full ">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text)] mb-4">
              What people are saying
            </h2>
            <p className="text-[var(--color-muted)] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Real feedback from founders, developers and teams building
              production-ready products.
            </p>
          </div>

          <div className="space-y-6 w-full">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden rounded-3xl"
              >
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 rounded-l-3xl bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 rounded-r-3xl bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div
                  className={`flex gap-4 sm:gap-6 hover:[animation-play-state:paused] ${row.className}`}
                >
                  {[...testimonials.slice(row.start, row.end)].map(
                    (testimonial, index) => (
                      <ReviewCard
                        testimonial={testimonial}
                        index={index}
                        key={index}
                      />
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Reviews;
