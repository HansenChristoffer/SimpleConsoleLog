var debugLevel = 1;
const DEFAULT_MESSAGE = `Default debug message`;

// Function that debugs.
export function debugMsg(msg = DEFAULT_MESSAGE, level = 0, asObject = true) {
  const TIMESTAMP = new Date().toLocaleString().replace(",", "");
  const SCOPE = new Error().stack.split("\n")[2].trim().split(" ")[1];

  if (level === debugLevel || level === 0) {
    if (!asObject) {
      console.log(`<${TIMESTAMP}> [Level=${level}, Scope=${SCOPE}] -> ${msg}`);
    } else if (asObject) {
      console.log({
        Timestamp: TIMESTAMP,
        Level: level,
        Scope: SCOPE,
        message: msg,
      });
    }
  }
}

// Sets the debug level to argument and responds with the new value
export function setDebugLevel(level) {
  debugLevel = level;

  return debugLevel;
}

// Gets the current debug level
export function getDebugLevel() {
  return debugLevel;
}
