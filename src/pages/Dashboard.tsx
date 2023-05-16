import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import {
  useGetFoxImagesData,
  useGetStoaPsData,
  useGetDangerousAddressesData,
} from "../hooks/index";
import {
  AddressDataTable,
  DescriptionChart,
  ExtensionChart,
  IpAddressDataTable,
} from "../components/index";
import { ipMaxValue, ipMinValue } from "../constants/ipValues";
import { DataTableValue } from "primereact/datatable";

const Dashboard = () => {
  const toast = useRef<Toast>(null);

  const [value, setValue] = useState<string>("");
  const [ipAddresses, setIpAddresses] = useState<DataTableValue[]>([]);

  const { foxImages, refetchGetFoxImages } = useGetFoxImagesData();
  const { stoaPs, refetchGetStoaPs } = useGetStoaPsData();
  const { refetchGetDangerousAddresses } = useGetDangerousAddressesData();

  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: "Invalid ip address!",
      life: 3000,
    });
  };

  const listIpAddresses = () => {
    const ipAddress = value.split(".");
    const newIpAddresses = [];

    const allCorrect = ipAddress.every(function (number) {
      return 0 < +number && +number < 255 && typeof number !== "number";
    });

    if (!allCorrect || ipAddress.length !== 4) {
      showError();
      setIpAddresses([]);
      return;
    }

    for (let i = ipMinValue; i <= ipMaxValue; i += 50) {
      if (i > +ipAddress[3]) {
        ipAddress[3] = i.toString();
        const newIP = { ipAddress: ipAddress.join(".") };
        newIpAddresses.push(newIP);
      }
    }
    setIpAddresses([...newIpAddresses]);
  };

  return (
    <div className="grid m-0">
      <div className="layout-main-container" style={{ width: "100%" }}>
        <Toast ref={toast} />
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              minHeight: "800px",
            }}
          >
            <div className="card flex" style={{ height: "380px" }}>
              <div
                className="card mb-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "5px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <img width="200" height="250" src={foxImages?.image} />
                </div>
                <Button onClick={() => refetchGetFoxImages()} label="Change" />
              </div>
              <div className="card mb-0" style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                    }}
                  >
                    <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                      {stoaPs?.author}
                    </div>
                    <div>{stoaPs?.quote}</div>
                  </div>
                  <Button onClick={() => refetchGetStoaPs()} label="Change" />
                </div>
              </div>
            </div>
            <div
              className="card flex flex-column mt-3 mb-0"
              style={{ height: "400px" }}
            >
              <label
                className="mb-1"
                style={{ fontSize: "14px", fontWeight: "bold" }}
                htmlFor="Ip-Input"
              >
                Ip Input
              </label>
              <InputText
                name="Ip-Input"
                className="mb-2"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
              <div className="flex justify-content-center">
                <Button
                  label="List"
                  className="col-4 mb-3"
                  onClick={listIpAddresses}
                />
              </div>
              <IpAddressDataTable ipAddresses={ipAddresses} />
            </div>
          </div>
          <div className="card flex mb-0" style={{ width: "100%" }}>
            <AddressDataTable />
            <div className="flex flex-column justify-content-evenly ml-8">
              <DescriptionChart />
              <Button
                label="Get Address Data"
                onClick={() => refetchGetDangerousAddresses()}
              />
              <ExtensionChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
