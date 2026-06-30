import React from 'react'

const Analytics = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">📈 Analytics & Reports</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Advanced analytics and historical data analysis coming soon...</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold text-blue-900">Daily Reports</h3>
            <p className="text-sm text-blue-700">View daily flood risk assessments</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-semibold text-green-900">Trends</h3>
            <p className="text-sm text-green-700">Analyze long-term trends and patterns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics