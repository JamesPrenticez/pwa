import { Routes, Route } from "react-router-dom";

import { LayoutWrapper } from "@components/layout/layout-wrapper";

import { Home } from "@pages/homepage/home";
import { Login } from "@pages/auth/login-page";
import { Register } from "@pages/auth/register-page";

import { Path } from "@models/paths";
import { Test } from "@pages/test";
import { Dashboard } from "@pages/dashboard/dashboard-page";
import { ProtectedRoute } from "@components/auth/protected-route";
import { NotFound } from "@pages/errors/404";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route path={Path.REGISTER} element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route path="/test/*" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
