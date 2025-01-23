import { FileText, CreditCard, UserCog, Mail } from "lucide-react"

export function ProcessSteps() {
  const steps = [
    {
      icon: FileText,
      title: "Fill up Application Form",
      color: "bg-rose-500",
    },
    {
      icon: CreditCard,
      title: "Make Online Payment",
      color: "bg-emerald-500",
    },
    {
      icon: UserCog,
      title: "Executive will Process Application",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Get Confirm Mail",
      color: "bg-gray-500",
    },
  ]

  return (
    <div className="bg-orange-400 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`p-2.5 rounded-full ${step.color} relative`}>
              {index === 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
              )}
              <step.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-sm">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

