const { render, screen } = require("@testing-library/react");
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en el componente <GifGrid/>", () => {
  const category = "Dragon Ball";

  test("Debe mostrar el loading inicialmente", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test("Debe mostrar items cuando se cargan las imagenes de useFetchGifs", () => {});
});
