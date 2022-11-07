import { Budget } from "./Budget";
import { Gantt } from "./Gantt";
import { Header } from "./Header";

const Timeline = () => {
  return (
    <section id="blog" className="relative pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col py-6 gap-10">
          <Budget />
          <Gantt />
        </div>
      </div>
    </section>
  );
};

export { Timeline };
