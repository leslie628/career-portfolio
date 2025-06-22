import "./card.css";
import { Button } from "../button";
import { Code, ExternalLink, VideoOff, FileText } from "lucide-react";
const Card = ({ project }) => {
    return <div className="card">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-base mb-4">{project.description}</p>
        <div className="links">
            <Button variant="outline" className="button-link" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" /><span className="link-text">GitHub</span>
                </a>
            </Button>
            <Button variant="outline" className="button-link" asChild>
                <a href={project.docs} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" /><span className="link-text">Github Docs</span>
                </a>
            </Button>
            <Button variant="outline" className="button-link" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /><span className="link-text">Live Demo</span>
                </a>
            </Button>
            <Button variant="outline" className="button-link" asChild>
                <a href={project.video} target="_blank" rel="noopener noreferrer">
                    <VideoOff className="mr-2 h-4 w-4" /><span className="link-text">Video</span>
                </a>
            </Button>
        </div>
    </div>;
}

export default Card;