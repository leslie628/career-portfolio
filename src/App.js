import React from "react";

import "./App.css";
import Card from "./card-component/card";
import BusinessImpact from "./business-impact/business-impact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";

let descriptionContent =
  "Evaluation of key non-functional attributes such as modularity, scalability, team autonomy, performance, framework independence and maintainability.";


let descriptionContentProject2 =
  "Products grid display and search input with category filter.";

const projects = [
  {
    title: "Micro Frontend vs Monolithic architecture",
    description: descriptionContent,
    github: "https://github.com/leslie628/microfrontends-portfolio",
    docs: "https://github.com/leslie628/Shell-app/tree/main/docs",
    video:
      "https://youtu.be/mgEzUR9jNC0?list=PLlvAnEJamXnzoip9y9nC-FqSN20fNSiBx",
    architecture:
      "https://github.com/leslie628/microfrontends-portfolio/blob/main/images/Monolith-MicroFrontend-Architecture.png",
    tech: [
      "React",
      "single-spa",
      "SystemJS",
      "Azure Blob Storage",
      "Azure DevOps CI/CD",
    ],
  },
  {
    title: "Task Management Web app",
    description:
      "A production-style full stack task management application built with React, ASP.NET Core Web API, and PostgreSQL. Features secure JWT authentication using HTTP-only cookies, protected API routes, cross-origin frontend/backend integration, and cloud deployment with Render and Supabase.",
    github: "https://github.com/leslie628/task-web-app",
    docs: "",
    demo: "https://task-web-app-amber.vercel.app/",
    video: "",
    architecture: "https://github.com/leslie628/task-web-app/#architecture",
    tech: [
      "React",
      "ASP.NET Core Web API",
      "PostgreSQL",
      "JWT Authentication",
      "HTTP-only Cookies",
      "Render",
      "Supabase",
    ],
  },
  {
    title: "Products browse and search web app",
    description: descriptionContentProject2,
    demo: "https://next-js-products-app.vercel.app/products",
    tech: ["Next.js", "TailWind CSS"],
  }
];

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-6 max-w-9xl mx-auto">
        <p className="text-lg mb-8 flex items-center font-bold justify-center">
          Welcome! I have created this Portfolio to showcase my MSc dissertation
          project and other work.
        </p>
        <div className="flex justify-between items-center gap-10">
          <div className="rounded-lg shadow-lg">
            <img
              alt="architecture"
              src="/images/Monolith-MicroFrontend-Architecture.png"
              className="w-full max-w-[520px] h-auto"
            />
            <div className="flex items-center justify-center mb-5">
              <button
                className="px-4 py-2 mt-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => navigate("/business-impact")}
              >
                View business impact
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} project={project}></Card>
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
