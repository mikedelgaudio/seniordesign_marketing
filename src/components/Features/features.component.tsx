const Features = () => {
  return (
    <section
      id="features"
      className="relative py-12 lg:py-20 bg-slate-800 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold">
          It's easy to get started
        </h2>
        <p className="text-slate-400 pt-2">You're ready to get serious</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-13 lg:grid-cols-3">
          <div className="bg-slate-600 rounded-xl p-8">
            <h3 className="font-bold text-2xl">Register for Prism+</h3>
            <p className="pt-2">
              Every Prism created includes a Prism+ analytic and connectivity
              subscription. To get your new Prism setup, register your Prism to
              get the best functionality.
            </p>
            <div className="flex items-center justify-center pt-3">
              <a
                href="#"
                className="flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-md  font-semibold leading-7 text-white transition-all duration-200 hover:bg-transparent hover:border-white focus:bg-transparent focus:text-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
              >
                Register
              </a>
            </div>
          </div>
          <div className="bg-slate-600 rounded-xl p-8">
            <h3 className="font-bold text-2xl">Connect Prism</h3>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              unde aut quam optio voluptate esse nesciunt autem cum eveniet est
              quasi, perspiciatis rerum. Expedita aperiam numquam laboriosam
              magnam culpa rem.
            </p>
          </div>
          <div className="bg-slate-600 rounded-xl p-8">
            <h3 className="font-bold text-2xl">Get productive</h3>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              unde aut quam optio voluptate esse nesciunt autem cum eveniet est
              quasi, perspiciatis rerum. Expedita aperiam numquam laboriosam
              magnam culpa rem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
