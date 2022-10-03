import mdelgaudImg from "../../assets/profile_pictures/mdelgaud.jpg";
import wreynoldImg from "../../assets/profile_pictures/wreyond.jpg";

const Team = () => {
  return (
    <section
      id="team"
      className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36 bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold">Meet the team</h2>
        <p className="text-slate-600 pt-2">
          We're on a mission to improve individual productivity one day at a
          time
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-13 md:grid-cols-3 sm:grid-cols-2">
          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src="https://via.placeholder.com/300"
              alt="Zain Aamer Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">Zain Aamer</p>
              <small className="text-slate-600">Mechanical Engineer</small>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src={mdelgaudImg}
              alt="Mike DelGaudio Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">Mike DelGaudio</p>
              <small className="text-slate-600">Computer Scientist</small>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src="https://via.placeholder.com/300"
              alt="Christopher Kurtz Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">Christopher Kurtz</p>
              <small className="text-slate-600">Computer Engineer</small>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src="https://via.placeholder.com/300"
              alt="Leticia Marquez Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">Leticia Marquez</p>
              <small className="text-slate-600">Mechanical Engineer</small>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src={wreynoldImg}
              alt="William Reynolds Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">William Reynolds</p>
              <small className="text-slate-600">Mechanical Engineer</small>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <img
              className="w-40 h-40 lg:w-[17rem] lg:h-[17rem] rounded-2xl "
              src="https://via.placeholder.com/300"
              alt="Marc Terranova Profile Picture"
              loading="lazy"
              height={272}
              width={272}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold m-0">Marc Terranova</p>
              <small className="text-slate-600">Mechanical Engineer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team };
