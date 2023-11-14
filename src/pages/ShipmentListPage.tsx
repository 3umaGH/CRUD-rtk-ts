import React from "react";
import { ShipmentTable } from "../components/ShipmentTable/ShipmentTable";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";

export const ShipmentListPage = () => {
  const shipment = useSelector((state: RootState) => state.shipment);
  return (
    <div>
      <ShipmentTable rows={shipment.shipments ?? []} />
    </div>
  );
};
