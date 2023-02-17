import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./component/pages/Home";
import Team from "./component/pages/Team";
import Events from "./component/pages/Events";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import NoPage from "./component/pages/NoPage";

// Loading is a page for website maintenance
import Loading from "./component/pages/Loading";

function App() {
    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NoPage />} />
            </Routes>
            <Footer/>
        </HashRouter>
    );
}

export default App;
