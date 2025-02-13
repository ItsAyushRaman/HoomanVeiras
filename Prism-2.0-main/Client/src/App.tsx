import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, FormSolo, FormTeam } from "./AllSections";
import { Homepage, Aboutpage, Eventpage, TestPage, Sponsors } from "./AllPages";
import LoginPage from "./sections/LoginPage";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <BackgroundDecoration /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/events" element={<Eventpage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/register" element={<FormSolo />} />
        <Route path="/formteam" element={<FormTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
