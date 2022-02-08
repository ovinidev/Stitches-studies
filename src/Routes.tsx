import {
  Routes,
  Route,
} from "react-router-dom";

import { Variants } from "./pages/Variants";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Variants />} />
    </Routes>
  )
}