import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import { Facebook } from "react-content-loader";
import { CustomErrorboundry } from "../CustomErrorboundryUI/CustomErrorboundryUI";
// import CustomErrorboundry from "../CustomErrorboundryUI/CustomErrorboundryUI";

const Haome = lazy(() => import("../../pages/Haome"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing() {
  return (
    <CustomErrorboundry>
<Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Facebook/>}>
              <Haome />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<h1>Loading Page not api ka data</h1>}>
              <CoinDetailsPage />
            </Suspense>
          }
        />
        {" "}
        {/* <Route
          path="*"
          element={
            <Suspense fallback={<h1>Loading Page not api ka data</h1>}>
              <h1>Gai de magaya</h1>
            </Suspense>
          }
        /> */}
      </Route>
    </Routes>
    </CustomErrorboundry>
    
  );
}

export default Routing;
