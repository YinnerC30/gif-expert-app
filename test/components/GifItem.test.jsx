import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas del componente GifItem", () => {
  const titulo = "Dragon Ball GIF by Toei Animation";
  const link =
    "https://media2.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=e52640fbrd5a6w92knd1zoivuwja3wyhb6mmkul1a0m1hiwg&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  test("Toma de Snapshot", () => {
    const { container } = render(<GifItem title={titulo} url={link} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la URL y ALT de la imagen indicado", () => {
    render(<GifItem title={titulo} url={link} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(link);
    expect(alt).toBe(titulo);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<GifItem title={titulo} url={link} />);
    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
