import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas del componente GifItem", () => {
  test("Toma de Snapshot", () => {
    const title = "Dragon Ball GIF by Toei Animation";
    const url =
      "https://media2.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=e52640fbrd5a6w92knd1zoivuwja3wyhb6mmkul1a0m1hiwg&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
