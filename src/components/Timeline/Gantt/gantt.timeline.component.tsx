const Gantt = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-4xl border-b-2  border-blue-600">
        Gantt Chart
      </h2>
      <div className="flex flex-col items-center justify-center">
        <img
          className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl"
          src="https://via.placeholder.com/1000x400"
          alt="Gnatt Chart"
          loading="eager"
          height={400}
          width={1000}
        />
        <p className="max-w-[1000px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit optio
          error aliquam assumenda consequuntur nesciunt eligendi nemo inventore,
          fuga a iste iure praesentium corporis natus. Id eos suscipit
          asperiores itaque!
        </p>
      </div>
    </div>
  );
};

export { Gantt };
