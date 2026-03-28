import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import bg from "./assets/background.jpg";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import Admin from "./pages/Admin";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

      {/* 🔥 BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          transform: "scale(1.1)",
          zIndex: -2,
        }}
      />

      {/* 🔥 DARK OVERLAY */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: -1,
        }}
      />

      {/* 🔥 MAIN CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* 🚀 FLOATING BUTTONS (VISIBLE EVERYWHERE) */}
      <WhatsAppButton />
      <CallButton />
      

    </div>
  );
}

export default App;