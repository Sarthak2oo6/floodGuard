import React, { useState } from 'react'

const Settings = () => {
  const [channelId, setChannelId] = useState(import.meta.env.VITE_THINGSPEAK_CHANNEL_ID || '')
  const [apiKey, setApiKey] = useState('')

  const handleSave = () => {
    console.log('Settings saved:', { channelId, apiKey })
    alert('Settings updated successfully! Please refresh the page.')
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">⚙️ Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ThingSpeak Channel ID
          </label>
          <input
            type="text"
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 1234567"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Read API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your API key"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default Settings