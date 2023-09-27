import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku", "Vegeta"]);
  console.log(categories);

  const onAddCategory = () => {
    setCategories([...categories, "Popeye"]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />
      <button type="button" onClick={onAddCategory}>
        Agregar
      </button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
