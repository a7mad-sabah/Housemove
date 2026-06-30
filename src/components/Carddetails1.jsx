import React from "react";
import { Truck, MapPin, CalendarDays } from "lucide-react"; // پێویستە lucide-react دابەزێنیت

const Carddetails1 = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Experienced with all kinds of property moves",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Full coverage across all London areas and beyond",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      title: "Flexible scheduling to match completion dates",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 bg-blue-50 rounded-xl">{item.icon}</div>
            <p className="text-gray-700 font-medium leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carddetails1;
