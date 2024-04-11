import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

import LocalStorage from "./services/LocalStorage.ts";
import { setJwt, setMe } from "./features/User/user.slice";
import { MeType } from "./utils/types";

function userIsConnected(): boolean {
  const jwt: string | null = LocalStorage.getJwt();
  const user: MeType | null = LocalStorage.getUser();

  return jwt != null && user != null;
}

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const jwt: string | null = LocalStorage.getJwt();
    const user: MeType | null = LocalStorage.getUser();
    if (jwt && user) {
      dispatch(setJwt(jwt));
      dispatch(setMe(user));
    }
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export { userIsConnected };

export default App;
