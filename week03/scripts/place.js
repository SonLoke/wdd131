// get the last modified date
let lastModified = document.lastModified

document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// weather info
let temperature = 11 // Celsius
let windSpeed = 4.72 // km/h

// [ \text{Wind Chill} (°C) = 13.12 + 0.6215 \times T - 11.37 \times V^{0.16} + 0.3965 \times T \times V^{0.16} ]

// Wind chill function
function calculaterWindChill (temperature, windSpeed) {
    // check inputs
    if (temperature <= 10 || windSpeed > 4.8) {
        return "N/A";
    }

    // Use formula
    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    return windChill;
}

const windChillResult = calculaterWindChill(temperature, windSpeed);

document.getElementById("windChillResult").textContent = "Wind Chill: " + Math.round(windChillResult, 2) + " °C";