import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/home/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />} />,
    <Route path="/home" element={<HomePage />} />
  ])
);

export default router;
