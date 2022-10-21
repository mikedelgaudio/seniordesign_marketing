const BlogCard = () => {
  return (
    <article className="flex gap-5 flex-col lg:flex-row lg:gap-20 items-center justify-center bg-slate-100 py-7 rounded-lg shadow-md">
      <div className="max-w-md px-4 md:px-0 sm:max-w-xl">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight flex flex-col">
          <span className="text-lg">
            {new Date().getMonth()}/{new Date().getDay()}/
            {new Date().getFullYear()}
          </span>
          The project begins
        </h2>
        <p className="pt-2 text-md sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veritatis rerum, et molestias optio iure magni atque dolore deserunt,
          iste maxime officia laborum quas, culpa nam sunt? Sapiente, sed quam!
        </p>
        <h3 className="font-bold text-lg pt-3">Header 2</h3>
        <p className="text-md sm:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veritatis rerum, et molestias optio iure magni atque dolore deserunt,
          iste maxime officia laborum quas, culpa nam sunt? Sapiente, sed quam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veritatis rerum, et molestias optio iure magni atque dolore deserunt,
          iste maxime officia laborum quas, culpa nam sunt? Sapiente, sed quam!
        </p>
      </div>
      <div className="flex items-center justify-center pt-6 lg:pt-0">
        <img
          src="https://via.placeholder.com/300"
          alt="Image"
          aria-hidden="true"
          height={300}
          width={300}
        />
      </div>
    </article>
  );
};

export { BlogCard };
