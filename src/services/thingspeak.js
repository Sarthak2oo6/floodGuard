import axios from 'axios'

const API_URL = import.meta.env.VITE_THINGSPEAK_API_URL || 'https://api.thingspeak.com'
const CHANNEL_ID = import.meta.env.VITE_THINGSPEAK_CHANNEL_ID
const READ_KEY = import.meta.env.VITE_THINGSPEAK_READ_API_KEY

/**
 * Fetch latest data from ThingSpeak channel
 * @returns {Promise<Object>} Latest channel data
 */
export const fetchThingSpeakData = async () => {
  try {
    if (!CHANNEL_ID || !READ_KEY) {
      throw new Error('ThingSpeak credentials not configured. Check your .env file.')
    }

    const response = await axios.get(
      `${API_URL}/channels/${CHANNEL_ID}/feeds/last.json`,
      {
        params: {
          api_key: READ_KEY,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('Error fetching ThingSpeak data:', error)
    throw new Error(`Failed to fetch sensor data: ${error.message}`)
  }
}

/**
 * Fetch historical data from ThingSpeak
 * @param {number} results - Number of results to fetch
 * @returns {Promise<Array>} Historical feed data
 */
export const fetchThingSpeakHistory = async (results = 100) => {
  try {
    if (!CHANNEL_ID || !READ_KEY) {
      throw new Error('ThingSpeak credentials not configured')
    }

    const response = await axios.get(
      `${API_URL}/channels/${CHANNEL_ID}/feeds.json`,
      {
        params: {
          api_key: READ_KEY,
          results: results,
        },
      }
    )

    return response.data.feeds
  } catch (error) {
    console.error('Error fetching historical data:', error)
    throw new Error(`Failed to fetch historical data: ${error.message}`)
  }
}

/**
 * Fetch channel metadata
 * @returns {Promise<Object>} Channel information
 */
export const fetchChannelMetadata = async () => {
  try {
    if (!CHANNEL_ID) {
      throw new Error('ThingSpeak channel ID not configured')
    }

    const response = await axios.get(
      `${API_URL}/channels/${CHANNEL_ID}.json`,
      {
        params: {
          api_key: READ_KEY,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('Error fetching channel metadata:', error)
    throw new Error(`Failed to fetch channel metadata: ${error.message}`)
  }
}
