import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-24 max-w-7xl mx-auto">
      <h2 className=" text-4xl font-extrabold text-center">
        Job Category List
      </h2>
      <p className="text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-7 mt-7">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
