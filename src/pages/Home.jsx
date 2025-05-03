import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

// Lazy load components for better performance
const About = lazy(() => import("../components/About.jsx"));
const OurServices = lazy(() => import("../components/OurServices.jsx"));

function Home() {
  return (
    <>
      <Hero />
      
      {/* Fallback loader while components load */}
      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
        <About />{/** remove this for now */}
        <OurServices />
      </Suspense>
    </>
  );
}

export default Home;
