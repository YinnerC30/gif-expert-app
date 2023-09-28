import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const category = "anime";
    const gifs = await getGifs(category);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
