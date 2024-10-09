import "./App.css";
import { Layout } from "./components/share/layout";
import { Route, Routes } from "react-router-dom";
import CreatePersonal from "./components/personal/createPersonal";
import DashboardRoute from "./routes/test";
import TablePersonal from "./components/personal/tablePersonal";
import Dashboard from "./components/dashboard/Dashboard";
import { TableEmployee } from "./components/personal/tableEmployee";
import { TestPersonal } from "./components/personal/TestPersonal";
import EditPersonal from "./components/personal/editPersonal";
import DeletePersonal from "./components/personal/deletePersonal";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/Table"
          element={
            <Layout>
              <TablePersonal />
            </Layout>
          }
        />
        <Route
          path="/create"
          element={
            <Layout>
              <CreatePersonal />
            </Layout>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Layout>
              <EditPersonal />
            </Layout>
          }
        />
        <Route
          path="/delete/:id"
          element={
            <Layout>
              <DeletePersonal />
            </Layout>
          }
        />
        <Route
          path="/TestPersonal"
          element={
            <Layout>
              <TestPersonal />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
