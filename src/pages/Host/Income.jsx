import React from "react"

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ]

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800">Income</h1>
      <p className="text-lg text-gray-600 mt-2">
        Last <span className="font-bold text-yellow-500">30 days</span>
      </p>
      <h2 className="text-4xl font-bold text-green-600 mt-4">$2,260</h2>
      <img
        className="w-full h-60 object-cover rounded-lg mt-6"
        src="/assets/images/income-graph.png"
        alt="Income graph"
      />
      <div className="flex justify-between items-center mt-8 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Your transactions (3)</h3>
        <p className="text-lg text-gray-600">
          Last <span className="font-bold text-yellow-500">30 days</span>
        </p>
      </div>
      <div className="space-y-4">
        {transactionsData.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">${item.amount}</h3>
            <p className="text-lg text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
