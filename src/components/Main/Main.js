import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main style={{ paddingTop: 64, paddingLeft: 20, paddingRight: 20 }}>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Main;
