import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Goku");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
