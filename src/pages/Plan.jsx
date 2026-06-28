import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import StepIndicator from "../components/StepIndicator";

import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import Step5 from "../components/steps/Step5";
import Step6 from "../components/steps/Step6";

export default function Plan() {
  const [currentStep, setCurrentStep] = useState(0);

const [formData, setFormData] = useState({
  van: "",
  movers: "",

  fullName: "",
  email: "",
  phone: "",

  pickupAddress: "",
  pickupCity: "",

  deliveryAddress: "",
  deliveryCity: "",

  movingDate: "",
  movingTime: "",

  propertyType: "",
  bedrooms: "",

  notes: "",
});
  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
    <Step4 formData={formData} setFormData={setFormData} />,
    <Step5 formData={formData} setFormData={setFormData} />,
    <Step6 formData={formData} />,
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log(formData);
      alert("Form Submitted Successfully!");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-8 md:py-16 px-3 sm:px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl md:rounded-3xl bg-white shadow-xl p-5 sm:p-6 md:p-10">
        {" "}
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Moving Quote Form
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-md mx-auto">
            Complete the form in a few simple steps.
          </p>
        </div>{" "}
        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
        {/* Form Content */}
        <div className="mt-8 md:mt-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
          {" "}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {steps[currentStep]}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Buttons */}
        <div className="mt-8 md:mt-10 flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center justify-between">
          {" "}
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300            ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-900 text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all duration-300"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
