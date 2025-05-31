import React from "react";

import './App.css';
import Card from "./card-component/card";


const projects = [
  {
    title: "Microfrontend Architecture",
    description:
      "A dissertation project showcasing microfrontend architecture using React, single-spa, SystemJS, and Azure Blob Storage.",
    github: "https://github.com/your-username/microfrontend-project",
    demo: "https://storagefrontendapps.z33.web.core.windows.net",
    video: "https://youtu.be/your-video-link",
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
