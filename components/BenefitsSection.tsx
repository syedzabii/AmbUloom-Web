// components/BenefitsSection.js
export default function BenefitsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-display-md font-bold text-primary-dark text-center">
          Why Choose Us?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-display-sm font-bold text-primary-dark">
              Flexible Schedule
            </h3>
            <p className="text-body-md text-text-secondary mt-2">
              Learn at your own pace with flexible class timings.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-display-sm font-bold text-primary-dark">
              Expert Teachers
            </h3>
            <p className="text-body-md text-text-secondary mt-2">
              Learn from certified and experienced Quran teachers.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-display-sm font-bold text-primary-dark">
              Interactive Classes
            </h3>
            <p className="text-body-md text-text-secondary mt-2">
              Engage in live, interactive sessions with teachers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
