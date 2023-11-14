import { Box, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/Store";
import { deleteShipment } from "../../features/Shipment/ShipmentSlice";
import { openShipmentDetails } from "../../features/ShipmentDetails/ShipmentDetailsSlice";

type ActionsProps = {
  orderNo: string;
};

export const ActionsComponent = ({ orderNo }: ActionsProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = () => {
        dispatch(deleteShipment(orderNo));
    }

    const handleViewDetails = () => {
        dispatch(openShipmentDetails(orderNo))
    }

  return (
    <Box>
      <Button variant="text" onClick={handleViewDetails} sx={{ minWidth: "0", mr: 1 }}>
        <SearchIcon />
      </Button>
      <Button variant="text" onClick={handleDelete} sx={{ minWidth: "0" }} color="error">
        <ClearOutlinedIcon />
      </Button>
    </Box>
  );
};
