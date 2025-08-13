import React from "react";

import './App.css';
import Card from "./card-component/card";

let descriptionContent="Evaluation of key non-functional attributes such as modularity, scalability, team autonomy, performance, framework independence and maintainability.";
descriptionContent +=" Tools used: single-spa, SystemJS, Azure Blob Storage and Azure DevOps CI/CD";
const projects = [
  {
    title: "Micro Frontend vs Monolithic architecture",
    description: descriptionContent,
    github: "https://github.com/leslie628/microfrontends-portfolio",
    docs: "https://github.com/leslie628/Shell-app/tree/main/docs",
    demo: "https://storagefrontendapps.z33.web.core.windows.net",
    video: "https://www.youtube.com/watch?v=C8022hzKLoU&list=PLlvAnEJamXnzoip9y9nC-FqSN20fNSiBx&index=2",
    architecture: "https://github.com/leslie628/microfrontends-portfolio/blob/main/images/Monolith-MicroFrontend-Architecture.png"
  }
  // Add more projects as needed
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      </header>
       <div className="p-6 max-w-4xl mx-auto">
    
      <p className="text-lg mb-8">
        Welcome! I have created this Portfolio to showcase my MSc dissertation project.
      </p>
      <div className="grid-layout">
        {projects.map((project, index) => (
          <Card key={index} project={project}>
       
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
