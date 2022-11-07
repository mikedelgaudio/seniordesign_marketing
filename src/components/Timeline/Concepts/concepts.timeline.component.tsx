import concept1 from "../../../assets/concepts/Concept1.jpg";
import concept2 from "../../../assets/concepts/Concept2.jpg";
import concept3 from "../../../assets/concepts/Concept3.jpg";

const Concepts = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-4xl border-b-2  border-blue-600">
        Concept Generation
      </h2>
      <div className="flex flex-col items-center justify-center">
        <img
          className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl"
          src={concept1}
          alt="Concept Art 1"
          loading="lazy"
          height={400}
          width={1000}
        />
        <img
          className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl"
          src={concept2}
          alt="Concept Art 2"
          loading="lazy"
          height={400}
          width={1000}
        />
        <img
          className="object-cover w-[500px] h-[300px] lg:w-[1000px] lg:h-[400px] rounded-2xl"
          src={concept3}
          alt="Concept Art 2"
          loading="lazy"
          height={400}
          width={1000}
        />
      </div>
    </div>
  );
};

export { Concepts };
