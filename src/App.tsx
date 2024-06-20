import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";
import Detail from "./pages/single/detail";
import NotFound from "./pages/not-found/not-found";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
