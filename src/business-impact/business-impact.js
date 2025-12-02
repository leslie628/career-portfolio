import { Link } from "react-router-dom";
import VideoCard from "../video-modal/video-card";

const BusinessImpact = () => {
    return (
        <>
            <div className="mb-4">
                <Link
                    to="/"
                    className="text-blue-600 ml-5 hover:underline"
                >
                    ← Back to Portfolio
                </Link>
                <h1 className="text-3xl flex justify-center font-bold text-blue-600">Business Impacts explanation</h1>
            </div>

            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <div className="relative shadow-lg rounded-lg p-3 group">
                    <h2 className="text-2xl font-semibold flex justify-center">Monolith</h2>
                    <img alt="monolith app" src="/images/monolith-artifact.png" />
                    <ul className="p-4 space-y-2">
                        <h2 className="font-semibold">Large build artifacts (73.96 KB including framework)</h2>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✖</span>
                            <span>
                                Increases initial load time and deployment payload.
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-red-600 mt-1">✖</span>
                            <span>
                                Lead to higher bandwidth usage, increased storage
                                requirements, and greater CI/CD compute costs.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group">
                    <h2 className="text-2xl font-semibold flex justify-center">Micro-frontend</h2>
                    <img alt="sub application" src="/images/subapp-artifact.png" />
                    <ul className="p-4">
                        <h2 className="font-semibold">Smaller build artifacts (15.3 KiB)</h2>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Reduced bandwidth usage during deployments
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Faster CI/CD pipeline execution with lower compute consumption
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Reduced operational expenditure (CI/CD, storage & network transfer)
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group">
                    <h2 className="text-2xl font-semibold flex justify-center">Independent pipelines</h2>
                    <img alt="Independent pipelines" src="/images/allPipelines.png" />
                    <ul className="p-4 space-y-2">
                        <h2 className="font-semibold">Independent Pipelines</h2>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Reduces unnecessary CI/CD compute time, directly lowering infrastructure
                                costs.
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Each team deploys independently without coordinating full application releases.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Only the affected micro-app is rebuilt and deployed, reducing CI/CD compute time and infrastructure cost.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Faster, safer feature delivery improves time-to-market without blocking parallel team progress.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Smaller release scope simplifies testing effort and reduces production deployment risk.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group">
                    <h2 className="text-2xl font-semibold flex justify-center">Independent Repos</h2>
                    <img alt="Independent repo" src="/images/microfrontend-repos.png" />
                    <ul className="p-4 space-y-2">
                        <h2 className="font-semibold">Team Autonomy & Ownership</h2>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Teams can deploy independently.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Teams own their sub-apps → less coordination overhead.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group">
                    <h2 className="text-2xl font-semibold flex justify-center">Independent Blob storage</h2>
                    <img alt="Independent blob containers" src="/images/azure-blob-container.png" />
                    <ul className="p-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Each sub-app (yellow) has its own storage → avoids conflicts and accidental overwrites.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Smaller, independent artifacts → lower storage costs and faster deployments.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                    <h2 className="text-2xl font-semibold flex justify-center">Scalable architecture</h2>
                    <img alt="Independent blob containers" src="/images/import-maps-azure.png" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 pointer-events-auto">
                            ▶ Watch Video
                        </button>
                    </div>
                    <VideoCard videoUrl="https://www.youtube.com/embed/uS-tPyuSJvk" />
                    <ul className="p-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Each micro-app is deployed independently via its own blob container.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Only the changed micro-app is redeployed → reduced bandwidth & faster pipelines.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Other applications remain untouched → lower regression risk.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>Business can release features without blocking other teams.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                    <h2 className="text-2xl font-semibold flex justify-center">Lower Risk & Increased Reliability</h2>
                    <img alt="Independent blob containers" src="/images/MicroApp-error.png" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 pointer-events-auto">
                            ▶ Watch Video
                        </button>
                    </div>
                    <VideoCard videoUrl="https://www.youtube.com/embed/DkGE9af1MDM" />
                    <ul className="p-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Failures are isolated to individual micro-apps without impacting the full platform.
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Other business-critical features remain available during partial outages.
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>
                                Reduced production incident severity and faster recovery time.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default BusinessImpact;