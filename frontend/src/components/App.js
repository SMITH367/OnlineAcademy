import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header> </Header>} />
      </Routes>
    </HashRouter>
  );
};

export { App };
