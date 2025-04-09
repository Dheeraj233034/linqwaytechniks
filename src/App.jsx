import React from "react";
import SolutionsGrid from "./components/Card1";
import IntegrationGrid from "./components/Integration";
import Testimonials from "./components/Testimonial";
import LatestUpdates from "./components/Latest";


const App = () => {
  return (
    <div>
   <SolutionsGrid/>
   <IntegrationGrid/>
   <Testimonials/>
   <LatestUpdates/>
    </div>
  );
};

export default App;

