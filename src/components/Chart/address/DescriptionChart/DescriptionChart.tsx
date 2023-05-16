import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useGetDangerousAddressesData } from "../../../../hooks/index";
import { ProgressSpinner } from "primereact/progressspinner";

const DescriptionChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const { dangerousAddresses, getDangerousAddressesIsLoading } =
    useGetDangerousAddressesData();

  const updateChartData = async () => {
    const addressDesc = await dangerousAddresses?.models?.map(
      ({ desc }) => desc
    );

    const descFrequency = await addressDesc?.reduce(
      (acc: Record<string, number>, curr: string | undefined) => {
        if (curr) {
          if (curr in acc) {
            acc[curr]++;
          } else {
            acc[curr] = 1;
          }
        }
        return acc;
      },
      {}
    );

    // const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: [...new Set(addressDesc)],
      datasets: [
        {
          data: descFrequency ? Object.values(descFrequency ?? {}) : [],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  };

  useEffect(() => {
    updateChartData();
    //eslint-disable-next-line
  }, [getDangerousAddressesIsLoading]);

  return (
    <div className="card flex justify-content-center flex-column mb-0">
      <label className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
        Description Chart
      </label>
      {!getDangerousAddressesIsLoading ? (
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-full md:w-25rem"
        />
      ) : (
        <div className="flex justify-content-center w-100">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};

export default DescriptionChart;
