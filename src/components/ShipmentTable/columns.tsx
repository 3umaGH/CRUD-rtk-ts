import { GridColDef } from "@mui/x-data-grid";

export const ShipmentTableColumns: GridColDef[] = [
  { field: "orderNo", headerName: "Order No", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "customer", headerName: "Customer", flex: 1 },
  { field: "trackingNo", headerName: "Tracking No", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "consignee", headerName: "Consignee", flex: 1 },
];