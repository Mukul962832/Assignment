import React, { useEffect } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import routes from "../../routes";

const AppContent = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="h-full w-full">
      {" "}
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route key={idx} path={route.path} element={<route.element />} />
            )
          );
        })}
      </Routes>
    </div>
  );
};

export default AppContent;
