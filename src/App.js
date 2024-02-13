import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from 'sonner'
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="bg-gradient-to-r from-[#093028] to-[#237A57]">
            <div className="container relative mx-auto h-screen p-4">
            <Toaster position="top-center" richColors />
            <Navbar2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            </div>
        </div>
    );
}

export default App;
