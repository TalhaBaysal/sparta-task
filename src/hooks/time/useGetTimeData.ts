import { getTime } from "../../services/index";
import { useQuery } from "react-query";

export const useGetTimeData = () => {
  const { data: time, isLoading: getTimeIsLoading } = useQuery("time", getTime);
  return {
    time,
    getTimeIsLoading,
  };
};
