import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-side border-2 my-8">
        <figure>
          <img src={logo} alt="Company" className="p-8 w-[200px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>

          <h4 className="text-md font-bold text-gray-700">{company_name}</h4>
          <div className="card-actions">
            <button className="btn btn-outline btn-info btn-sm">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-info btn-sm">
              {job_type}
            </button>
          </div>
          <p className="flex items-center space-x-2">
            <span>
              <IoLocationOutline />
            </span>
            <span>{location}</span>
            <span>
              <AiOutlineDollar />
            </span>
            <span>{salary}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/job/${id}`}>
              <button className="btn bg-gradient-to-r from-blue-500 to-[#9774FF] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;
