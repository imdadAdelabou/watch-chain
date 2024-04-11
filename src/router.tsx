import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/home/HomePage";


import MintPage from "./views/MintPage";
import IndexView from "./views/home/IndexView";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />}>
      <Route path="/" element={<IndexView />} />,
      <Route path="/mint" element={<MintPage />} />,
   <Route path="/home" element={<HomePage />} />
    </Route>,
  ])
);

export default router;
