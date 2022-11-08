import p2 from "../../../assets/concepts/p2.pdf";

const Gantt = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-4xl border-b-2  border-blue-600">
        Gantt Chart
      </h2>
      <div className="flex flex-col items-center justify-center">
        <iframe src={p2} className="w-full max-h-96 min-h-[500px]"></iframe>
      </div>
    </div>
  );
};

export { Gantt };
