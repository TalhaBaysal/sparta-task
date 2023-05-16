import { getDangerousAddresses } from "../../services/index";
import { useQuery } from "react-query";

export const useGetDangerousAddressesData = () => {
  const {
    data: dangerousAddresses,
    isLoading: getDangerousAddressesIsLoading,
    refetch: refetchGetDangerousAddresses,
  } = useQuery("dangerousAddresses", getDangerousAddresses, {
    enabled: false,
    refetchOnWindowFocus: false,
  });
  return {
    dangerousAddresses,
    getDangerousAddressesIsLoading,
    refetchGetDangerousAddresses,
  };
};
