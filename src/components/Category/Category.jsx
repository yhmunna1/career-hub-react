import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="">
      <div className="card bg-[#FAF8FF]">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
