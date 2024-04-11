import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import NftPage from "./views/NftPage";
import MintPage from "./views/MintPage";
import IndexView from "./views/home/IndexView";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />}>
      <Route path="/" element={<IndexView />} />,
      <Route path="/mint" element={<MintPage />} />,
      <Route path="/nft" element={<NftPage />} />,
    </Route>,
  ])
);

export default router;
