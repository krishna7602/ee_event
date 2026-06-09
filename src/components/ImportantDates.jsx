import React from "react";

export default function ImportantDates() {
  const dates = [
    {
      event: "Paper Submission Starts",
      date: "5 February, 2026",
      description: "Start date to submit research papers for review.",
      highlight: false
    },
    {
      event: "Final Paper Submission Deadline",
      date: "9 May, 2026",
      description: "Final deadline to submit research papers for review.",
      highlight: true
    },
    {
      event: "Paper Acceptance Date",
      date: "20 May, 2026",
      description: "Authors will receive acceptance or rejection notifications.",
      highlight: false
    },
    {
      event: "Camera-Ready Submission",
      date: "27 May, 2026",
      description: "Final versions of accepted papers must be submitted.",
      highlight: false
    },
    {
      event: "Last Date of Registration",
      date: "3 June, 2026",
      description: "Final date for all participants to register for the conference.",
      highlight: false
    },
    {
      event: "Registration with Late Fee",
      date: "6 June, 2026",
      description: "Registration with additional fee (Actual Fee + Rs 500/- late Fee).",
      highlight: false
    },
    {
      event: "Conference Dates",
      date: "12–13 June, 2026",
      description: (
        <>
          The official National Conference on Net-Zero Energy Systems Hybrid Mode 2026.{" "}
          
        </>
      ),
      highlight: false
    }
  ];

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-900 text-center">Important Dates</h2>
        
        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <th className="px-6 py-4 text-left text-lg font-semibold">Event</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, index) => (
                <tr 
                  key={index}
                  className={`border-b border-gray-200 transition-colors ${
                    item.highlight
                      ? 'bg-red-50 hover:bg-red-100'
                      : index % 2 === 0 ? 'bg-gray-50 hover:bg-blue-50' : 'bg-white hover:bg-blue-50'
                  }`}
                >
                  <td className={`px-6 py-4 font-semibold ${item.strikethrough ? 'line-through text-gray-500' : item.highlight ? 'text-red-700' : 'text-gray-800'}`}>
                    {item.event}
                  </td>
                  <td className={`px-6 py-4 font-medium whitespace-nowrap ${item.strikethrough ? 'line-through text-gray-500' : item.highlight ? 'text-red-600 font-bold' : 'text-blue-600'}`}>
                    {item.date}
                  </td>
                  <td className={`px-6 py-4 ${item.strikethrough ? 'line-through text-gray-500' : 'text-gray-600'}`}>
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4 mt-8">
          {dates.map((item, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border ${ item.highlight ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}
            >
              <h3 className={`font-bold text-lg mb-2 ${item.strikethrough ? 'line-through text-gray-500' : item.highlight ? 'text-red-700' : 'text-gray-800'}`}>{item.event}</h3>
              <p className={`font-semibold mb-3 ${item.strikethrough ? 'line-through text-gray-500' : item.highlight ? 'text-red-600' : 'text-blue-600'}`}>{item.date}</p>
              <p className={`text-sm ${item.strikethrough ? 'line-through text-gray-500' : 'text-gray-600'}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}