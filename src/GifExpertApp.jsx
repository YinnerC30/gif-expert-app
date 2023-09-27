import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Goku", "Vegeta"]);
  console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>123</li>
        <li>XYZ</li> */}
      </ol>
    </>
  );
};
