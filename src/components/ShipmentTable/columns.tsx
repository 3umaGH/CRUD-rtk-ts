import { GridColDef } from "@mui/x-data-grid";
import { ActionsComponent } from "./ActionsComponent";

export const ShipmentTableColumns: GridColDef[] = [
  { field: "orderNo", headerName: "Order No", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "customer", headerName: "Customer", flex: 1 },
  { field: "trackingNo", headerName: "Tracking No", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "consignee", headerName: "Consignee", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    flex: 0.4,
    minWidth: 150,
    renderCell: (params) => <ActionsComponent orderNo={params.row.orderNo} />,
  },
];

export const getHeaderNameByField = (field: string) => {
  return (
    ShipmentTableColumns.find((col) => col.field === field)?.headerName || ""
  );
};
