import motto from "../../../assets/motto/motto.jpg";

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
              <p className="pt-2 text-lg">
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
          <div className="flex items-center justify-center pt-6 sm:pt-0">
            <img
              className="object-cover h-[250px] w-[600px] rounded-xl"
              src={motto}
              alt={"Banner"}
              aria-hidden="true"
              height={250}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Motto };
