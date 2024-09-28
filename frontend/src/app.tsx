import { Routes, Route } from "react-router-dom";
import { Path } from "@models";

import { Home } from "@pages/Home";
import Layout from "@components/layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
