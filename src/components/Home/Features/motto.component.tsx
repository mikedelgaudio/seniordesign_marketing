const Motto = () => {
  return (
    <section
      id="features"
      className="relative py-12 lg:py-20 bg-slate-500 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold">Why Prism</h2>
              <p className="pt-2 max-w-md text-lg">
                Try the product thats revolutionizing focus time at work and
                school
              </p>
            </div>

            <div className="pt-10">
              <h3 className="font-bold">What's included:</h3>
              <ul className="list-style-none flex flex-col pt-3">
                <li>Prism Cube</li>
                <li>Prism+ Subscription</li>
                <li>microUSB Cable</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <img
              src="https://via.placeholder.com/100"
              alt="image"
              loading="lazy"
              height={100}
              width={100}
            />
            <img
              src="https://via.placeholder.com/100"
              alt="image"
              loading="lazy"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Motto };
