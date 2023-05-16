import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  useGetDangerousAddressesData,
  useGetRegInfsData,
} from "../../../../hooks/index";
import { Button } from "primereact/button";
import { RegInfDialog } from "../../../index";
import moment from "moment";

const AddressDataTable = () => {
  const [domain, setDomain] = useState<any>();
  const [regInfDialog, setRegInfDialog] = useState(false);

  const { dangerousAddresses, getDangerousAddressesIsLoading } =
    useGetDangerousAddressesData();

  const { regInfs, getRegInfsIsLoading, refetchGetRegInfs } = useGetRegInfsData(
    domain?.url
  );

  const openRegInfDialog = async (rowData: any) => {
    await setDomain({ ...rowData });
    setRegInfDialog(true);
    refetchGetRegInfs();
  };

  const hideRegInfDialog = () => {
    setRegInfDialog(false);
  };

  return (
    <div className="card mb-0">
      <DataTable
        value={dangerousAddresses?.models}
        paginator
        rows={10}
        loading={getDangerousAddressesIsLoading}
        tableStyle={{ minWidth: "82rem" }}
      >
        <Column field="url" header="Address" style={{ minWidth: "400px" }} />
        <Column field="desc" header="Description" />
        <Column
          field="date"
          header="Date"
          body={(rowData: any) => (
            <>{moment(rowData.date).format("MMMM Do YYYY, h:mm:ss a")}</>
          )}
        />
        <Column
          body={(rowData) => (
            <>
              <Button
                icon="pi pi-info-circle"
                className="p-button-rounded p-button-secondary m-2"
                onClick={() => {
                  openRegInfDialog(rowData);
                }}
              />
            </>
          )}
          exportable={false}
          style={{ maxWidth: "18rem", minWidth: "14.5rem" }}
        />
      </DataTable>

      <RegInfDialog
        visible={regInfDialog}
        onHide={hideRegInfDialog}
        isLoading={getRegInfsIsLoading}
        regInfs={regInfs}
      />
    </div>
  );
};

export default AddressDataTable;
