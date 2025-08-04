import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <Router>
      <div className="flex h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main
            className="p-4 overflow-y-auto"
            style={{ backgroundColor: "#F9FAFB" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
