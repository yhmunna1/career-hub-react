import bannerImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero h-[580px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 flex justify-center items-end">
            <img src={bannerImage} className="-me-20" />
          </div>
          <div className="w-1/2 justify-center">
            <h1 className="text-7xl font-extrabold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#9774FF] bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>
            <p className="py-6 text-gray-500 font-medium">
              Explore thousands of job opportunities with all the <br />
              information you need. Its your future. Come find it. Manage all
              <br />
              your job application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-blue-500 to-[#9774FF] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
