import { getWeatherDetails } from "../../services/index";
import { useQuery } from "react-query";

export const useGetWeatherDetailsData = () => {
  const { data: weatherDetails, isLoading: getWeatherDetailsIsLoading } =
    useQuery("weatherDetails", getWeatherDetails);
  return {
    weatherDetails,
    getWeatherDetailsIsLoading,
  };
};
