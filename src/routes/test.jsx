import { Route, Routes } from "react-router";
import { Layout } from "../components/share/layout";

const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Layout />} />
      </Routes>
    </>
  );
};
export default DashboardRoute;
