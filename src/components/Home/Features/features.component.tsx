import { Motto } from "./motto.component";

const Features = () => {
  return (
    <>
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
              <h3 className="font-bold text-2xl">Real Time Analytics</h3>
              <p className="pt-2">
                Our web interface allows for on-the-go tracking of your work,
                study, exercise, or leisure activities so that you can see where
                your spending your time, anytime!
              </p>
              {/* <div className="flex items-center justify-center pt-3">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-md  font-semibold leading-7 text-white transition-all duration-200 hover:bg-transparent hover:border-white focus:bg-transparent focus:text-white focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                >
                  Register
                </a>
              </div> */}
            </div>
            <div className="bg-slate-600 rounded-xl p-8">
              <h3 className="font-bold text-2xl">Long Lasting Battery</h3>
              <p className="pt-2">
                The Prism offers multiple battery modes capable of providing up
                to 40+ hours of battery life for a seamless user experience.
              </p>
            </div>
            <div className="bg-slate-600 rounded-xl p-8">
              <h3 className="font-bold text-2xl">Tactile Experience</h3>
              <p className="pt-2">
                The physical act of flipping the Prism is proven to facilitate
                noticeable increase in users' ability to quickly change focus
                between tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Motto />
    </>
  );
};

export { Features };
