import * as R from "react";

const Checkout = R.lazy(() => import("../pages/Checkout"));

const checkout = {
  path: "/checkout",
  element: (
    <R.Suspense fallback={<>...</>}>
      <Checkout />
    </R.Suspense>
  ),
};

export default checkout;
