import { getFoxImages } from "../../services/index";
import { useQuery } from "react-query";

export const useGetFoxImagesData = () => {
  const {
    data: foxImages,
    isLoading: getFoxImagesIsLoading,
    refetch: refetchGetFoxImages,
  } = useQuery("foxImages", getFoxImages, {
    enabled: true,
    refetchOnWindowFocus: false
  });
  return { foxImages, getFoxImagesIsLoading, refetchGetFoxImages };
};
