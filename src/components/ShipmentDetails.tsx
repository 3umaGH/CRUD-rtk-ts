import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/Store";
import { Modal, Box } from "@mui/material/";
import { closeShipmentDetails } from "../features/ShipmentDetails/ShipmentDetailsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ShipmentDetails = () => {
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {shipmentDetails.isOpen && (
        <Modal open={true} onClose={() => dispatch(closeShipmentDetails())}>
          <Box sx={style}>
            <h1>order details here for {shipmentDetails.currentOrder}</h1>
          </Box>
        </Modal>
      )}
    </>
  );
};
