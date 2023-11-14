import { ShipmentTable } from "../components/ShipmentTable/ShipmentTable";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";

import { Container } from "@mui/material/";
import { ShipmentDetails } from "../components/ShipmentDetails";

export const ShipmentListPage = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  return (
    <>
      <ShipmentDetails />
      <Container maxWidth={false}>
        <ShipmentTable rows={shipment.shipments ?? []} />
      </Container>
    </>
  );
};
