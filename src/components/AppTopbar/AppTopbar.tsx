import { useGetWeatherDetailsData, useGetTimeData } from "../../hooks/index";
import moment from "moment";

const AppTopbar = () => {
  const { weatherDetails } = useGetWeatherDetailsData();
  const { time } = useGetTimeData();

  return (
    <div
      className="layout-topbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="layout-topbar-logo">
        <span style={{ fontSize: "large", fontWeight: "bold" }}>
          {"SpartaTask"}
        </span>
      </div>
      <div style={{ fontWeight: "bold" }}>
        <div>Ankara, {weatherDetails && weatherDetails[0].city_name}</div>
        <div>{weatherDetails && weatherDetails[0].temp} Celsius</div>
        <div>{moment(time?.datetime).format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    </div>
  );
};

export default AppTopbar;
