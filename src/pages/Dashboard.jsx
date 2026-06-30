import React, { useState, useEffect } from 'react'
import RealTimeCard from '../components/RealTimeCard'
import ChartComponent from '../components/ChartComponent'
import { fetchThingSpeakData } from '../services/thingspeak'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const result = await fetchThingSpeakData()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading real-time data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">📊 Real-time Monitoring</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700"><strong>Error:</strong> {error}</p>
          <p className="text-red-600 text-sm mt-2">Make sure your ThingSpeak Channel ID and API Key are configured in the .env file</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <RealTimeCard
          title="Water Level"
          value={data?.field1 || 'N/A'}
          unit="cm"
          threshold={100}
          icon="💧"
        />
        <RealTimeCard
          title="Temperature"
          value={data?.field2 || 'N/A'}
          unit="°C"
          threshold={35}
          icon="🌡️"
        />
        <RealTimeCard
          title="Humidity"
          value={data?.field3 || 'N/A'}
          unit="%"
          threshold={80}
          icon="💨"
        />
        <RealTimeCard
          title="Rainfall"
          value={data?.field4 || 'N/A'}
          unit="mm"
          threshold={50}
          icon="🌧️"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent title="Water Level Trend" data={data} field="field1" />
        <ChartComponent title="Temperature Trend" data={data} field="field2" />
      </div>

      <div className="mt-6 text-sm text-gray-600">
        {data?.created_at && (
          <p>Last updated: {new Date(data.created_at).toLocaleString()}</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
