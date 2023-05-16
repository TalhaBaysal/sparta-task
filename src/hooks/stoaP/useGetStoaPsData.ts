import { getStoaPs } from "../../services/index";
import { useQuery } from "react-query";

export const useGetStoaPsData = () => {
  const {
    data: stoaPs,
    isLoading: getStoaPsIsLoading,
    refetch: refetchGetStoaPs,
  } = useQuery("stoaPs", getStoaPs, {
    enabled: true,
    refetchOnWindowFocus: false,
  });
  return { stoaPs, getStoaPsIsLoading, refetchGetStoaPs };
};
