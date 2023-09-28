import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  test("Debe cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "saitama" } });
    expect(input.value).toBe("saitama");
    // screen.debug();
  });

  test("Debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "saitama";
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
  });
});
