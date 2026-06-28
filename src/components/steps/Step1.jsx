import { Check, Truck, Users } from "lucide-react";

const vans = [
  {
    id: 1,
    name: "Small Van",
    description: "Perfect for small apartments or studio moves.",
  },
  {
    id: 2,
    name: "Medium Van",
    description: "Ideal for 1–2 bedroom house removals.",
  },
  {
    id: 3,
    name: "Large Van",
    description: "Best choice for large homes and offices.",
  },
];

const movers = [
  {
    id: 1,
    title: "1 Mover",
    description: "Suitable for light moves.",
  },
  {
    id: 2,
    title: "2 Movers",
    description: "Recommended for most customers.",
  },
  {
    id: 3,
    title: "3 Movers",
    description: "Fast loading and unloading.",
  },
];

export default function Step1({ formData, setFormData }) {
  return (
    <div className="space-y-12">
      {/* =================== VAN =================== */}

      <div>
        <h2 className="text-2xl font-bold text-gray-900">Choose Your Van</h2>

        <p className="text-gray-500 mt-2">
          Select the van size that best fits your move.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {vans.map((van) => (
            <button
              type="button"
              key={van.id}
              onClick={() =>
                setFormData({
                  ...formData,
                  van: van.name,
                })
              }
              className={`relative rounded-2xl border-2 p-6 text-left transition-all duration-300

                ${
                  formData.van === van.name
                    ? "border-violet-600 shadow-lg"
                    : "border-gray-200 hover:border-violet-400 hover:shadow-md"
                }
              `}
            >
              {formData.van === van.name && (
                <div className="absolute right-4 top-4 w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}

              <div className="w-16 h-16 rounded-xl bg-violet-100 flex items-center justify-center">
                <Truck className="text-violet-600" size={30} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{van.name}</h3>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                {van.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* =================== MOVERS =================== */}

      <div>
        <h2 className="text-2xl font-bold text-gray-900">Number of Movers</h2>

        <p className="text-gray-500 mt-2">Choose how many movers you need.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {movers.map((worker) => (
            <button
              type="button"
              key={worker.id}
              onClick={() =>
                setFormData({
                  ...formData,
                  movers: worker.title,
                })
              }
              className={`relative rounded-2xl border-2 p-6 text-left transition-all duration-300

                ${
                  formData.movers === worker.title
                    ? "border-violet-600 shadow-lg"
                    : "border-gray-200 hover:border-violet-400 hover:shadow-md"
                }
              `}
            >
              {formData.movers === worker.title && (
                <div className="absolute right-4 top-4 w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}

              <div className="w-16 h-16 rounded-xl bg-violet-100 flex items-center justify-center">
                <Users className="text-violet-600" size={30} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{worker.title}</h3>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                {worker.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
