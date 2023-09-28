import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import PropTypes from "prop-types";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);
  console.log(categories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
