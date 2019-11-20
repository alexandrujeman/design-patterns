class FancyLogger {
  constructor() {
    // If there are no other instances created
    if (FancyLogger["instance"] == null) {
      // Initializing to empty array
      this["logs"] = [];
      // New instance is created if there are no other instances
      FancyLogger["instance"] = this;
    }
    // Returns a single instance created instead of return new every time
    return FancyLogger["instance"];
  }

  log(message) {
    this["logs"].push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this["logs"].length} Logs`);
  }
}

// Instance of our singleton
const logger = new FancyLogger();
// Prevent modifications, no other methods or objects can be added/removed from this instance
Object.freeze(logger);
// Export instance of our logger instad of class
export default logger;
