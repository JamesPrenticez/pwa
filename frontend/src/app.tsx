import { Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { Layout } from "@components/layout/layout";
import { Login } from "@pages/auth/Login";
import { Register } from "@pages/auth/Register";

import { Path } from "@models/paths";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route path={Path.REGISTER} element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
