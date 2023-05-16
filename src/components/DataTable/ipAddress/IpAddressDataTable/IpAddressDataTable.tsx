import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface IpAddressDataTableProps {
  ipAddresses: any;
}

const IpAddressDataTable: React.FC<IpAddressDataTableProps> = ({
  ipAddresses,
}) => {
  return (
    <div className="card mb-0" style={{ height: "100%" }}>
      <DataTable value={ipAddresses}>
        <Column field="ipAddress" header="Ip Addresses" />
      </DataTable>
    </div>
  );
};

export default IpAddressDataTable;
