import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { NameServerDialog } from "../../index";
import moment from "moment";
import { Button } from "primereact/button";
import { IRegInf } from "../../../../models";

interface RegInfDialogProps {
  visible: boolean;
  onHide: () => void;
  isLoading: boolean;
  regInfs: IRegInf | undefined;
}

const RegInfDialog: React.FC<RegInfDialogProps> = ({
  visible,
  isLoading,
  onHide,
  regInfs,
}) => {
  const [regInfDialog, setRegInfDialog] = useState(false);

  const openRegInfDialog = async () => {
    setRegInfDialog(true);
  };

  const hideRegInfDialog = () => {
    setRegInfDialog(false);
  };

  return (
    <Dialog
      header="Registration Information"
      visible={visible}
      onHide={onHide}
      style={{ width: "50vw", minHeight: "180px" }}
    >
      {!isLoading ? (
        <div className="card">
          <DataTable
            value={regInfs ? [regInfs] : []}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="domain" header="Domain" />
            <Column field="domain_age" header="Domain Age" />
            <Column
              field="nameservers"
              header="Name Servers"
              body={() => (
                <>
                  <Button
                    label="Show Name Servers"
                    onClick={openRegInfDialog}
                  />
                </>
              )}
            />
            <Column
              field="create_date"
              header="Create Date"
              body={(rowData: IRegInf) => (
                <>
                  {moment(rowData?.create_date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </>
              )}
            />
            <Column
              field="expire_date"
              header="Expire Date"
              body={(rowData: IRegInf) => (
                <>
                  {moment(rowData?.expire_date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </>
              )}
            />
          </DataTable>
        </div>
      ) : (
        <div className="flex justify-content-center w-100">
          <ProgressSpinner />
        </div>
      )}

      <NameServerDialog
        visible={regInfDialog}
        onHide={hideRegInfDialog}
        nameServers={regInfs?.nameservers}
      />
    </Dialog>
  );
};

export default RegInfDialog;
