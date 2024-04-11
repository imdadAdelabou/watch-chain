import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import NftPage from "./views/NftPage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />} />,
    <Route path="/nft" element={<NftPage />} />,
  ])
);

export default router;
