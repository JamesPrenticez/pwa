import { Routes, Route } from "react-router-dom";

import { LayoutWrapper } from "@components/layout/layout-wrapper";

import { HomePage } from "@pages/home/home-page";
import { Login } from "@pages/auth/login-page";
import { Register } from "@pages/auth/register-page";

import { Path } from "@models/paths";
import { Test } from "@pages/test";
import { Settings } from "@pages/settings";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path={Path.HOME} element={<HomePage />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route path={Path.REGISTER} element={<Register />} />
        <Route path={Path.SETTINGS} element={<Settings />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
