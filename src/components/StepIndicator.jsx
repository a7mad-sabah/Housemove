import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const active = index <= currentStep;
          const completed = index < currentStep;

          return (
            <div
              key={index}
              className={`flex items-center ${
                index !== totalSteps - 1 ? "flex-1" : ""
              }`}
            >
              {/* Step Circle */}
              <motion.div
                initial={false}
                animate={{
                  scale: active ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`relative z-10 flex items-center justify-center
                  w-11 h-11 rounded-full border-2 font-semibold transition-all duration-300

                  ${
                    active
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                `}
              >
                {completed ? <Check size={20} strokeWidth={3} /> : index + 1}
              </motion.div>

              {/* Line */}
              {index !== totalSteps - 1 && (
                <div className="flex-1 h-1 mx-2 rounded-full bg-gray-200 overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{
                      width: completed ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="h-full bg-violet-600 rounded-full"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step Labels */}
      <div className="grid grid-cols-6 mt-4 gap-2 text-center">
        <span
          className={`text-xs font-medium ${
            currentStep >= 0 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Step 1
        </span>

        <span
          className={`text-xs font-medium ${
            currentStep >= 1 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Step 2
        </span>

        <span
          className={`text-xs font-medium ${
            currentStep >= 2 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Step 3
        </span>

        <span
          className={`text-xs font-medium ${
            currentStep >= 3 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Step 4
        </span>

        <span
          className={`text-xs font-medium ${
            currentStep >= 4 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Step 5
        </span>

        <span
          className={`text-xs font-medium ${
            currentStep >= 5 ? "text-violet-600" : "text-gray-400"
          }`}
        >
          Review
        </span>
      </div>
    </div>
  );
}
