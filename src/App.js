import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { WhatIsIt } from "./pages/WhatIsIt";
import { HowWorks } from "./pages/HowWorks";
import { WhatFor } from "./pages/WhatFor";
import { Who } from "./pages/Who";
import {Footer} from "./components/Footer";

export const App = () => {
  return (
    <>
    <div className='app-wrapper'>
     <Header/>
     <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/what-is-it" element={<WhatIsIt />} />
        <Route path="/how-works" element={<HowWorks />} />
        <Route path="/what-for" element={<WhatFor />} />
        <Route path="/who" element={<Who />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>  
    </>
  );
}

