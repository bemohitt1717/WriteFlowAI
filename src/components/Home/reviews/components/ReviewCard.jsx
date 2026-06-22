 const ReviewCard = ({testimonial, index}) => (
    <div
      key={index}
      className="bg-[var(--color-surface)]
    border border-[var(--color-border)]
    hover:border-[var(--color-accent)]/35
    rounded-2xl
    p-4 sm:p-5
    shrink-0
    w-[280px] sm:w-[380px]
    shadow-[0_8px_26px_rgba(0,0,0,0.18)]
    transition-colors duration-150"
    >
      <div className="flex mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--color-accent)] fill-[var(--color-accent)]"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          ))}
      </div>
      {/* ✅ testimonial parameter se individual review data nikala */}
      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm">
            {testimonial.name}
          </p>
          <p className="text-[var(--color-muted)] text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );

  export default ReviewCard;