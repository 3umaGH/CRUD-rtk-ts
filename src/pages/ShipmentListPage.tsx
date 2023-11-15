import { ShipmentTable } from "../components/ShipmentTable/ShipmentTable";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../app/Store";
import { RootState } from "../app/Store";

import {
  Container,
  CircularProgress,
  Alert,
  Button,
  Box,
} from "@mui/material/";
import { ShipmentDetails } from "../components/ShipmentDetails";
import { fetchUsers } from "../features/Shipment/thunks";

export const ShipmentListPage = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Container maxWidth={"xl"}>
        <ShipmentDetails />

        {shipment.loading ? (
          <Box
            sx={{
              display: "flex",
              height: "95vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={"7.5rem"} />
          </Box>
        ) : (
          <>
            {shipment.error && shipment.usingLocalData && (
              <Alert
                severity="warning"
                action={
                  <Button
                    sx={{ mx: 1, display: { xs: "none", sm: "block" } }}
                    size="small"
                    variant="text"
                    onClick={() => dispatch(fetchUsers())}
                  >
                    Retry
                  </Button>
                }
              >
                Something went wrong with retreiving latest data. Using local
                copy.
              </Alert>
            )}

            <ShipmentTable rows={shipment.shipments} />
          </>
        )}
      </Container>
    </>
  );
};
