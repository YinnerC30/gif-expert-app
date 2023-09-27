import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
