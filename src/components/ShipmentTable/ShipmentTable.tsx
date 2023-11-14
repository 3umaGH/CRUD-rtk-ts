import { DataGrid } from "@mui/x-data-grid";
import { ShipmentTableColumns } from "./columns";
import { ShipmentProps } from "../../constants";

type ShipmentTableProps = {
  rows: ShipmentProps[];
};

export const ShipmentTable = ({ rows }: ShipmentTableProps) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={ShipmentTableColumns}
        getRowId={(row) => row.orderNo}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick
      />
    </div>
  );
};
