import { DataGrid } from "@mui/x-data-grid";
import { ShipmentTableColumns } from "./columns";
import { ShipmentProps } from "../../constants";

type ShipmentTableProps = {
  rows: ShipmentProps[];
};

export const ShipmentTable = ({ rows }: ShipmentTableProps) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={ShipmentTableColumns}
        getRowId={(row) => row.orderNo}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
