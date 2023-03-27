import * as R from "react";

const NotFound = R.lazy(() => import("../pages/NotFound"));

const notFound = {
  path: "*",
  element: (
    <R.Suspense fallback={<>...</>}>
      <NotFound />
    </R.Suspense>
  ),
};

export default notFound;
