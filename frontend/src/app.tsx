import { Routes, Route } from "react-router-dom";

import { Home } from "@pages/home";
import { Layout } from "@components/layout/layout";
import { Login } from "@pages/auth/auth-login";
import { Register } from "@pages/auth/auth-register";

import { Path } from "@models/paths";
import { Test } from "@pages/test";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route path={Path.REGISTER} element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  );
}

export default App;
