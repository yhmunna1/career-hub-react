import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-24 max-w-7xl mx-auto">
      <h2 className=" text-4xl font-extrabold text-center">Featured Jobs</h2>
      <p className="text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-5 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-gradient-to-r from-blue-500 to-[#9774FF] text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
