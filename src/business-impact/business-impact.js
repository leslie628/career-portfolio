import VideoCard from "../video-modal/video-card";

const BusinessImpact = () => {
    return (
        <>
        <h1 className="text-3xl flex items-center justify-center font-bold">Business benefits of architecture</h1>
        <div className="flex pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                <h2 className="text-2xl font-semibold flex justify-center">Monolith</h2>
                <img alt="monolith app" src="/images/monolith-artifact.png" />
                <VideoCard videoUrl="https://www.youtube.com/embed/mgEzUR9jNC0" />
                <ul className="p-4 space-y-2">
                      <h2 className="font-semibold">Large build artifacts (73.96 KB including framework)</h2>
                    <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✖</span>
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
            <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                <h2 className="text-2xl font-semibold flex justify-center">Micro-frontend</h2>
                <img alt="sub application" src="/images/subapp-artifact.png" />
                <VideoCard videoUrl="https://www.youtube.com/embed/mgEzUR9jNC0" />
                <ul className="p-4">
                     <h2 className="font-semibold">Smaller build artifacts (15.3 KiB)</h2>
                    <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✖</span>
                        <span>
                            Reduced bandwidth usage during deployments
                        </span>
                    </li>

                    <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✖</span>
                        <span>
                            Faster CI/CD pipeline execution with lower compute consumption
                        </span>
                    </li>
                     <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✖</span>
                        <span>
                            Reduced operational expenditure (CI/CD, storage & network transfer)
                        </span>
                    </li>
                </ul>
            </div>
            <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                <h2 className="text-2xl font-semibold flex justify-center">Independent pipelines</h2>
                <img alt="Independent pipelines" src="/images/allPipelines.png" />
                <VideoCard videoUrl="https://www.youtube.com/embed/mgEzUR9jNC0" />
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
                            Teams deploy independently without conflicts, reducing errors and
                            regression testing overhead.
                        </span>
                    </li>

                    <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✔</span>
                        <span>
                            Faster, safer feature delivery improves time-to-market with lower risk.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                <h2 className="text-2xl font-semibold flex justify-center">Independent Repos</h2>
                <img alt="Independent repo" src="/images/microfrontend-repos.png" />
                <VideoCard videoUrl="https://www.youtube.com/embed/mgEzUR9jNC0" />
                <ul className="p-4">
                    <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full inline-block"></span>
                        Independent pipelines reduce unnecessary compute time → cost savings
                    </li>
                </ul>
            </div>
            <div className="relative shadow-lg rounded-lg p-3 group cursor-pointer">
                <h2 className="text-2xl font-semibold flex justify-center">Independent Blob storage</h2>
                <img alt="Independent blob containers" src="/images/azure-blob-container.png" />
                <VideoCard videoUrl="https://www.youtube.com/embed/mgEzUR9jNC0" />
                <ul className="p-4">
                    <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full inline-block"></span>
                        Independent pipelines reduce unnecessary compute time → cost savings
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default BusinessImpact;