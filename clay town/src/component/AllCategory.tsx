import { useEffect, useState } from "react";
import { getAllCategory } from "../utils/utils";
import ItemCards from "./ItemCards";

const AllCategory = () => {
  const [allProductCategory, setAllProductCategory] = useState([]);

  useEffect(() => {
    async function getAllItemsCategory() {
      const allItemsCategory = await getAllCategory();

    setAllProductCategory(allItemsCategory);
      console.log(allItemsCategory, "allItemsCategory: AllCategory");
    }
    getAllItemsCategory();
  }, []);
  return (
    <ul>
      <ItemCards products={allProductCategory} />
    </ul>
  );
};

export default AllCategory;
