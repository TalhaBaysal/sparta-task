import React from "react";
import { Dialog } from "primereact/dialog";

interface NameServerDialogProps {
  visible: boolean;
  onHide: () => void;
  nameServers: string[] | undefined;
}

const NameServerDialog: React.FC<NameServerDialogProps> = ({
  visible,
  onHide,
  nameServers,
}) => {
  return (
    <Dialog
      header="Name Server List"
      visible={visible}
      onHide={onHide}
      style={{ width: "50vw", minHeight: "180px" }}
    >
      <div className="card">{nameServers?.join(", ")}</div>
    </Dialog>
  );
};

export default NameServerDialog;
