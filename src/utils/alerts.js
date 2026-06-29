/**
 * Check if a sensor value exceeds the alert threshold
 * @param {number} value - Current sensor value
 * @param {number} threshold - Alert threshold
 * @returns {boolean} True if alert should be triggered
 */
export const shouldTriggerAlert = (value, threshold) => {
  return typeof value === 'number' && value > threshold
}

/**
 * Format sensor reading for display
 * @param {*} value - Sensor value
 * @param {string} unit - Unit of measurement
 * @returns {string} Formatted display string
 */
export const formatSensorReading = (value, unit = '') => {
  if (value === null || value === undefined) return 'N/A'
  return `${parseFloat(value).toFixed(2)}${unit ? ` ${unit}` : ''}`
}

/**
 * Get alert severity level
 * @param {number} value - Current value
 * @param {number} threshold - Alert threshold
 * @param {number} criticalThreshold - Critical threshold
 * @returns {string} Severity level: 'normal', 'warning', 'critical'
 */
export const getAlertSeverity = (value, threshold, criticalThreshold) => {
  if (value >= criticalThreshold) return 'critical'
  if (value >= threshold) return 'warning'
  return 'normal'
}
