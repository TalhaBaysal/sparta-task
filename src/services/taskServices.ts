import axios from "axios";
import { QueryFunctionContext } from "react-query";
import { weatherApiKey, whoIsApiKey } from "../constants/apiKeys";

export const getFoxImages = async (): Promise<any> =>
  await axios.get(`https://randomfox.ca/floof/`).then((res) => res.data);

export const getStoaPs = async (): Promise<any> =>
  await axios
    .get(`https://api.themotivate365.com/stoic-quote`)
    .then((res) => res.data);

export const getWeatherDetails = async (): Promise<any> =>
  await axios
    .get(
      `https://api.weatherbit.io/v2.0/current?lat=39.866667&lon=32.866667&key=${weatherApiKey}`
    )
    .then((res) => res.data);

export const getTime = async (): Promise<any> =>
  await axios
    .get(`https://worldtimeapi.org/api/timezone/Europe/Istanbul`)
    .then((res) => res.data);

export const getDangerousAddresses = async (): Promise<any> =>
  await axios
    .get(`https://www.usom.gov.tr/api/address/index`)
    .then((res) => res.data);

export const getRegInfs = async ({
  queryKey,
}: QueryFunctionContext<[string, number | null]>): Promise<any> => {
  const [, domainName] = queryKey;
  return await axios
    .get(`https://api.ip2whois.com/v2?key=${whoIsApiKey}&domain=${domainName}`)
    .then((res) => res.data);
};
