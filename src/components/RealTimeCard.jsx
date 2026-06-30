import React from 'react'

const RealTimeCard = ({ title, value, unit, threshold, icon }) => {
  const numValue = parseFloat(value)
  const isAlert = !isNaN(numValue) && numValue > threshold

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
      isAlert ? 'border-red-500' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${
            isAlert ? 'text-red-600' : 'text-gray-900'
          }`}>
            {value}
          </p>
          <p className="text-gray-500 text-xs mt-1">{unit}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      {isAlert && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded p-2">
          <p className="text-red-700 text-xs font-semibold">⚠️ Alert: Above threshold ({threshold}{unit})</p>
        </div>
      )}
    </div>
  )
}

export default RealTimeCard