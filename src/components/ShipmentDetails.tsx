import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/Store";
import { Modal, Box, Button, Typography, TextField } from "@mui/material/";
import { closeShipmentDetails } from "../features/ShipmentDetails/ShipmentDetailsSlice";
import { getHeaderNameByField } from "./ShipmentTable/columns";
import { deleteShipment } from "../features/Shipment/ShipmentSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  textAlign: "center",
};

export const ShipmentDetails = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );

  const dispatch = useDispatch<AppDispatch>();

  const currentShipment = shipment.shipments.find(
    (shipment) => shipment.orderNo === shipmentDetails.currentOrder
  );

  const handleDelete = () => {
    dispatch(deleteShipment(shipmentDetails.currentOrder));
    dispatch(closeShipmentDetails());
  };

  return (
    <>
      {shipmentDetails.isOpen && currentShipment && (
        <Modal open={true} onClose={() => dispatch(closeShipmentDetails())}>
          <Box sx={style}>
            <form>
              <Typography id="modal-title" variant="h6" component="h2">
                Shipment Details
              </Typography>

              {Object.keys(currentShipment).map((key) => (
                <TextField
                  key={key}
                  label={getHeaderNameByField(key) || key}
                  defaultValue={currentShipment[key]}
                  //onChange={handleChange}
                  required
                  sx={{ mt: 3, width: 1 }}
                />
              ))}

              <Button
                sx={{ m: 1, mt: 3 }}
                style={{
                  width: "80px",
                  height: "40px",
                }}
                variant="contained"
                color="primary"
                size="small"
                type="submit"
              >
                Save
              </Button>

              <Button
                sx={{ m: 1, mt: 3 }}
                style={{
                  width: "80px",
                  height: "40px",
                }}
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
};
