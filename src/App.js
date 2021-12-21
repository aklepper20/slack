import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
            <Route path="/" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
