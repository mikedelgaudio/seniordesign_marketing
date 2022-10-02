import "./hero.component.css";

const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-flow-col lg:auto-cols-fr items-center place-content-center">
          <div className="mx-auto max-w-sm sm:max-w-xl">
            <h1 className="font-pj text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight">
              Get serious with{" "}
              <span className="text-gradient">productivity</span>
            </h1>
            <p className="pt-4 text-lg sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              veritatis rerum, et molestias optio iure magni atque dolore
              deserunt, iste maxime officia laborum quas, culpa nam sunt?
              Sapiente, sed quam!
            </p>
            <div className="flex items-center justify-end pt-6">
              <button className="flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-5 py-3 text-md lg:text-xl font-semibold leading-7 text-white transition-all duration-200 hover:bg-transparent hover:text-slate-900 focus:bg-transparent focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 lg:pt-0">
            <img
              src="https://via.placeholder.com/500"
              alt="Hero banner"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };
