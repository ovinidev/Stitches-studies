import {
  Routes,
  Route,
} from "react-router-dom";

import { Stitches } from "./pages/Stitches";
import { Radix } from "./pages/Radix";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Stitches />} />
      <Route path="/radix" element={<Radix />} />
    </Routes>
  )
}