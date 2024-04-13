import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import NftPage from "./views/NftPage";
import MintPage from "./views/MintPage";
import IndexView from "./views/home/IndexView";
import Marketplace from "./views/marketplace/Marketplace";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />}>
      <Route path="/" element={<IndexView />} />,
      <Route path="/mint" element={<MintPage />} />,
      <Route path="/nft-details?" element={<NftPage />} />,
      <Route path="/marketplace" element={<Marketplace />} />,
    </Route>,
  ])
);

export default router;
