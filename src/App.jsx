

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CareerPage from "./pages/Careers";
import ChatBot from "./pages/Chatbot";
import Contact from "./pages/Contact";
import Crm from './pages/Crm';
import Iot from "./pages/Iot";


function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Careers" element={<CareerPage />} />
          <Route path="/Chatbot" element={<ChatBot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crm" element={<Crm />} /> 
          <Route path="/iot" element={<Iot />} />
          <Route path="/request-demo" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
