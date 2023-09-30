import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas a <GifExpertApp/>", () => {
  test("Mostrar contenido renderizado", () => {
    render(<GifExpertApp />);
    screen.debug();
  });

  test("Toma de snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe contener el titulo de la aplicación", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "GifExpertApp"
    );
  });

  test("Goku debe ser la categoria de Gif predeterminada al ejecutar la aplicación", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Goku")).toBeTruthy();
  });

  test("Se debe mostrar el mensaje cargando...", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });
});
