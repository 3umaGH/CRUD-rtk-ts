import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/Store";
import { fetchUsers } from "./features/Shipment/thunks";
import { ShipmentListPage } from "./pages/ShipmentListPage";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ShipmentListPage />
    </>
  );
}

export default App;
