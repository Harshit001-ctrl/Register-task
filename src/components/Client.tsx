import { ClientLogos } from "./Client-logo"
import { ProcessSteps } from "./Process"

export default function HappyClients() {
  return (
    <div className="w-full  bg-white p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer service.
          </p>
        </div>
        <ClientLogos />
        <ProcessSteps />
      </div>
    </div>
  )
}

