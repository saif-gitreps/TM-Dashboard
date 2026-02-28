import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import { ProtectRoute } from "./components/ProjectRoute";

function App() {
   return (
      <>
         <Routes>
            <Route
               path="/"
               element={
                  <ProtectRoute auth={false}>
                     <LoginPage />
                  </ProtectRoute>
               }
            />
            <Route
               path="/dashboard"
               element={
                  <Layout>
                     <ProtectRoute>
                        <DashboardPage />
                     </ProtectRoute>
                  </Layout>
               }
            />
         </Routes>
      </>
   );
}

export default App;
