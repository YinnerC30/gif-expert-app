const { render, screen } = require("@testing-library/react");
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid/>", () => {
  const category = "Dragon Ball";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("Debe mostrar items cuando se cargan las imagenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "Google",
        url: "http://www.google.com",
      },
      {
        id: "abz",
        title: "Facebook",
        url: "http://www.facebook.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);

    screen.debug();
  });
});
