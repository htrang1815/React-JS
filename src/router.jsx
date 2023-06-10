import { Route, Routes } from "react-router-dom";
import Reverses from "./components/Reverses";
import Chunk from "./components/Chunk";
import UniqArray from "./components/UniqArray";
import UniqObject from "./components/UniqObject";
import GroupBy from "./components/GroupBy";
import TrimAll from "./components/TrimAll";
import MapKey from "./components/MapKey";
import SwitchOrder from "./components/SwitchOrder";
import SumAll from "./components/SumAll";
import TemplateString from "./components/TemplateString";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Reverses />}></Route>
      <Route path="/reverses" element={<Reverses />}></Route>
      <Route path="/chunk" element={<Chunk />}></Route>
      <Route path="/uniqarr" element={<UniqArray />}></Route>
      <Route path="/uniqobj" element={<UniqObject />}></Route>
      <Route path="/groupby" element={<GroupBy />}></Route>
      <Route path="/trimall" element={<TrimAll />}></Route>
      <Route path="/mapkey" element={<MapKey />}></Route>
      <Route path="/switchorder" element={<SwitchOrder />}></Route>
      <Route path="/sumall" element={<SumAll />}></Route>
      <Route path="/templatestring" element={<TemplateString />}></Route>
    </Routes>
  );
};

export default Router;
