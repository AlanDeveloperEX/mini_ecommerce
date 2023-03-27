import * as R from "react";

const Home = R.lazy(() => import("../pages/Home"));

const home = {
  path: "/",
  element: (
    <R.Suspense fallback={<>...</>}>
      <Home />
    </R.Suspense>
  ),
};

export default home;
