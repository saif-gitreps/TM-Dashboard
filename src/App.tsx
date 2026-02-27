import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<>hello</>} />
            <Route
               path="/dashboard"
               element={
                  <Layout>
                     <DashboardPage />
                  </Layout>
               }
            />
         </Routes>
      </>
   );
}

export default App;
