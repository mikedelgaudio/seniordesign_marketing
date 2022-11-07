import { Header } from "./Header";

const Timeline = () => {
  return (
    <section id="blog" className="relative pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col items-center justify-center py-6 gap-10">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl "
              src="https://via.placeholder.com/1000x400"
              alt="Gnatt Chart"
              loading="eager"
              height={400}
              width={1000}
            />
            <h2 className="max-w-[1000px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              optio error aliquam assumenda consequuntur nesciunt eligendi nemo
              inventore, fuga a iste iure praesentium corporis natus. Id eos
              suscipit asperiores itaque!
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl "
              src="https://via.placeholder.com/1000x400"
              alt="Gnatt Chart"
              loading="eager"
              height={400}
              width={1000}
            />
            <h2 className="max-w-[1000px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              optio error aliquam assumenda consequuntur nesciunt eligendi nemo
              inventore, fuga a iste iure praesentium corporis natus. Id eos
              suscipit asperiores itaque!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline };
