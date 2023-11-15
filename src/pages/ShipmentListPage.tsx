import { ShipmentTable } from "../components/ShipmentTable/ShipmentTable";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";

import { Container, CircularProgress, Alert } from "@mui/material/";
import { ShipmentDetails } from "../components/ShipmentDetails";

export const ShipmentListPage = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <ShipmentDetails />

          {shipment.loading ? (
            <CircularProgress size={"7.5rem"} />
          ) : (
            <>
              {shipment.error && shipment.usingLocalData && (
                <Alert severity="warning">
                  Something went wrong with retreiving latest data. Using local
                  copy.
                </Alert>
              )}

              <ShipmentTable rows={shipment.shipments} />
            </>
          )}
        </div>
      </Container>
    </>
  );
};
