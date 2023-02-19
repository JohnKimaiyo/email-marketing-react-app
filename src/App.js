import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import HomePage from "./pages/HomePage";
import City from "./pages/City";
import Gender from "./pages/Gender";
import LivingStatus from "./pages/LivingStatus";
import MaritalStatus from "./pages/MaritalStatus";
import State from "./pages/State";
import Time from "./pages/Time";
import Year from "./pages/Year";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="summary" element={<Summary />} />
          <Route path="city" element={<City />} />
          <Route path="gender" element={<Gender />} />
          <Route path="livingstatus" element={<LivingStatus />} />
          <Route path="maritalstatus" element={<MaritalStatus />} />
          <Route path="state" element={<State />} />
          <Route path="time" element={<Time />} />
          <Route path="year" element={<Year />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
