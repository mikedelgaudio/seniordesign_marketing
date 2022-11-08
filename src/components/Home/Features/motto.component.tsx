import motto from "../../../assets/motto/motto.jpg";

const Motto = () => {
  return (
    <section
      id="features"
      className="relative py-12 lg:py-20 bg-slate-500 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold">Why Prism</h2>
              <div className="flex flex-col gap-3 pt-2">
                <p className="text-lg">
                  We designed Prism to modernize the way we approach
                  productivity. There are plenty of tools on the market that aim
                  to help reduce distractions or enhance focus. However, we
                  noticed a serious lack of tools to help our hardworking
                  students and professionals track their time and analyze their
                  habits for the purpose of continuously improving.
                </p>
                <p className="text-lg">
                  With Prism, the tactile experience of our signature cube,
                  paired with our sleek web interface helps track time spent on
                  different tasks and offers historical and live
                  tracking/suggestions so that you can spend your time where it
                  matters most.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 sm:pt-0">
            <img
              className="object-cover h-[250px] w-[500px] rounded-xl"
              src={motto}
              alt={"Banner"}
              aria-hidden="true"
              height={250}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Motto };
