import { GridColDef } from "@mui/x-data-grid";
import { ActionsComponent } from "./ActionsComponent";

export const ShipmentTableColumns: GridColDef[] = [
  { field: "orderNo", headerName: "Order No", flex: 1, minWidth: 250 },
  { field: "date", headerName: "Date", flex: 1, minWidth: 100 },
  { field: "customer", headerName: "Customer", flex: 1, minWidth: 250 },
  { field: "trackingNo", headerName: "Tracking No", flex: 1, minWidth: 250 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 100 },
  { field: "consignee", headerName: "Consignee", flex: 1, minWidth: 150 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => <ActionsComponent orderNo={params.row.orderNo} />,
  },
];

export const getHeaderNameByField = (field: string): string => {
  return (
    ShipmentTableColumns.find((col) => col.field === field)?.headerName || field
  );
};
