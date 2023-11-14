import { ShipmentTable } from "../components/ShipmentTable/ShipmentTable";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";

import { Container } from "@mui/material/";

export const ShipmentListPage = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  return (
    <Container maxWidth={false}>
      <ShipmentTable rows={shipment.shipments ?? []} />
    </Container>
  );
};
