import { ClientLogos } from "./Client-logo"
import { ProcessSteps } from "./Process"

export default function HappyClients() {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Heading Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Our Happy Clients
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state-of-the-art customer service.
          </p>
        </div>

        {/* Client Logos Section */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          <ClientLogos />
        </div>

        {/* Process Steps Section */}
        <div className="w-full">
          <ProcessSteps />
        </div>

      </div>
    </div>
  )
}
