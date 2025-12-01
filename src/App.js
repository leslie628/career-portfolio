import React from "react";

import './App.css';
import Card from "./card-component/card";
import BusinessImpact from "./business-impact/business-impact";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";

let descriptionContent = "Evaluation of key non-functional attributes such as modularity, scalability, team autonomy, performance, framework independence and maintainability.";
descriptionContent += " Tools used: single-spa, SystemJS, Azure Blob Storage and Azure DevOps CI/CD";

let descriptionContentProject2 = "Products grid display and search input with category filter."
descriptionContentProject2 += " Tech used: Next.js, TailWind CSS";

let descriptionContentProject3 = "A fully responsive pricing UI. Includes hover animations, reusable components, and scalable architecture."
descriptionContentProject3 += " Tech used: React, TailWind CSS";
const projects = [
  {
    title: "Micro Frontend vs Monolithic architecture",
    description: descriptionContent,
    github: "https://github.com/leslie628/microfrontends-portfolio",
    docs: "https://github.com/leslie628/Shell-app/tree/main/docs",
    demo: "https://storagefrontendapps.z33.web.core.windows.net",
    video: "https://youtu.be/mgEzUR9jNC0?list=PLlvAnEJamXnzoip9y9nC-FqSN20fNSiBx",
    architecture: "https://github.com/leslie628/microfrontends-portfolio/blob/main/images/Monolith-MicroFrontend-Architecture.png"
  },
  {
    title: "Products browse and search web app",
    description: descriptionContentProject2,
    demo: "https://next-js-products-app.vercel.app/products"
  },
  {
    title: "Responsive Pricing Plans UI",
    description: descriptionContentProject3,
    demo: "https://pricing-plan-upwork.vercel.app/"
  }
];

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="p-6 max-w-9xl mx-auto">
        <p className="text-lg mb-8 flex items-center justify-center">
          Welcome! I have created this Portfolio to showcase my MSc dissertation project and other work.
        </p>
        <div className="flex justify-between items-center gap-10">
          <div className="rounded-lg shadow-lg">
            <img alt="architecture" src="/images/Monolith-MicroFrontend-Architecture.png" className="w-[35vw]" />
            <div className="flex items-center justify-center mb-5">
            <button className="px-4 py-2 mt-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={()=>navigate("/business-impact")}>
              View business impact
            </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} project={project}>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/business-impact" element={<BusinessImpact />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
