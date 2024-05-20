import { useLoaderData, useParams } from "react-router-dom";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Job Applied");
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-extrabold py-20 bg-[#FAF8FF]">
        Job Details
      </h2>
      <div className="max-w-7xl mx-auto my-16 flex gap-5">
        <div className="w-2/3 space-y-5">
          <p className=" text-zinc-500 font-medium">
            <span className="font-extrabold text-black">Job Description:</span>{" "}
            {job_description}
          </p>
          <p className=" text-zinc-500 font-medium">
            <span className="font-extrabold text-black">
              Job Responsibility:
            </span>{" "}
            {job_responsibility}
          </p>
          <p className=" text-zinc-500 font-medium">
            <span className="font-extrabold text-black">
              Educational Requirements:
            </span>{" "}
            <br />
            {educational_requirements}
          </p>
          <p className=" text-zinc-500 font-medium">
            <span className="font-extrabold text-black">Experiences:</span>{" "}
            <br />
            {experiences}
          </p>
        </div>
        <div className="w-1/3 bg-[#F5F1FF] p-7 rounded-lg">
          <h4 className=" text-xl font-extrabold pb-3">Job Details</h4>
          <hr />
          <div className="flex items-center space-x-2 text-xl pt-5">
            <BiSolidDollarCircle className="text-violet-600 text-2xl" />
            <p className=" text-zinc-500 font-medium">
              <span className="font-extrabold text-zinc-600">Salary:</span>{" "}
              {salary}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xl pt-3">
            <FaRegCalendarAlt className="text-violet-600" />
            <p className=" text-zinc-500 font-medium">
              <span className="font-extrabold text-zinc-600">Experiences:</span>{" "}
              {experiences}
            </p>
          </div>
          <h4 className=" text-xl font-extrabold pt-7 pb-4">
            Contact Information
          </h4>
          <hr />
          <div className="flex items-center space-x-2 text-xl pt-5">
            <IoCall className="text-violet-600" />
            <p className=" text-zinc-500 font-medium">
              <span className="font-extrabold text-zinc-600">Phone:</span>{" "}
              {contact_information.phone}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xl pt-3">
            <MdOutlineMarkEmailUnread className="text-violet-600" />
            <p className=" text-zinc-500 font-medium">
              <span className="font-extrabold text-zinc-600">Email:</span>{" "}
              {contact_information.email}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xl pt-3">
            <MdOutlineLocationOn className="text-violet-600 text-3xl" />
            <p className=" text-zinc-500 font-medium">
              <span className="font-extrabold text-zinc-600">Address:</span>{" "}
              {contact_information.address}
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={handleApplyJob}
              className="btn btn-wide bg-gradient-to-r from-blue-500 to-[#9774FF] text-white"
            >
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
