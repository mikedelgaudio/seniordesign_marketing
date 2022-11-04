import { Header } from "./Header";

const Timeline = () => {
  return (
    <section id="blog" className="relative pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col items-center justify-center py-6 gap-10">
          <img
            className="w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl "
            src="https://via.placeholder.com/1000x400"
            alt="Gnatt Chart"
            loading="eager"
            height={400}
            width={1000}
          />
          <img
            className="w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl "
            src="https://via.placeholder.com/1000x400"
            alt="Gnatt Chart"
            loading="eager"
            height={400}
            width={1000}
          />
        </div>
      </div>
    </section>
  );
};

export { Timeline };
