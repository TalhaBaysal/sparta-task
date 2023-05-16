import { getRegInfs } from "../../services/index";
import { useQuery } from "react-query";

export const useGetRegInfsData = (domainName: string | undefined) => {
  const {
    data: regInfs,
    isLoading: getRegInfsIsLoading,
    refetch: refetchGetRegInfs,
  } = useQuery(["regInf", domainName], getRegInfs, {
    enabled: false,
    refetchOnWindowFocus: false,
  });
  return { regInfs, getRegInfsIsLoading, refetchGetRegInfs };
};
