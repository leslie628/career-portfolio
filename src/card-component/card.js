import "./card.css";
import { Button } from "../button";
import { Code, ExternalLink, VideoOff, FileText, Building2 } from "lucide-react";
const Card = ({ project }) => {
    return <div className="w-full lg:max-w-2xl bg-white shadow-lg rounded-lg p-10 flex flex-col items-center hover:scale-105 transition-transform">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-base mb-4">{project.description}</p>
        <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap overflow-x-auto">
            {project.github && <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Code className="ml-3 h-5 w-5" /><span>GitHub</span>
                </a>
            </Button>
            }
            {project.docs && <Button variant="outline" asChild>
                <a href={project.docs} target="_blank" rel="noopener noreferrer">
                    <FileText className="ml-1 h-5 w-5" /><span>Docs</span>
                </a>
            </Button>
            }
            {project.demo &&
                <Button variant="outline"  asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="ml-3 h-5 w-5" /><span>Live site</span>
                    </a>
                </Button>
            }
            {project.video &&
                <Button variant="outline" asChild>
                    <a href={project.video} target="_blank" rel="noopener noreferrer">
                        <VideoOff className="ml-2 h-5 w-5" /><span>Video</span>
                    </a>
                </Button>
            }
            <br />
            {project.architecture &&
                <Button variant="outline" asChild>
                    <a href={project.architecture} target="_blank" rel="noopener noreferrer">
                        <Building2 className="ml-6 h-5 w-5" /><span>Architecture</span>
                    </a>
                </Button>
            }
        </div>
    </div>;
}

export default Card;