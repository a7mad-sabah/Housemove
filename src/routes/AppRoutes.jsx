// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import HouseRemovals from "../pages/HouseRemovals";
// import OfficeRelocation from "../pages/OfficeRelocation";
// import StudentMoving from "../pages/StudentMoving";
// import RubbishRemoval from "../pages/RubbishRemoval";
// import Packages from "../pages/Packages";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/house-removals" element={<HouseRemovals />} />
//         <Route path="/office-relocation" element={<OfficeRelocation />} />
//         <Route path="/student-moving" element={<StudentMoving />} />
//         <Route path="/rubbish-removal" element={<RubbishRemoval />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import HouseRemovals from "../pages/HouseRemovals";
import OfficeRelocation from "../pages/OfficeRelocation";
import StudentMoving from "../pages/StudentMoving";
import RubbishRemoval from "../pages/RubbishRemoval";
import Packages from "../pages/Packages";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/house-removals" element={<HouseRemovals />} />
          <Route path="/office-relocation" element={<OfficeRelocation />} />
          <Route path="/student-moving" element={<StudentMoving />} />
          <Route path="/rubbish-removal" element={<RubbishRemoval />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;