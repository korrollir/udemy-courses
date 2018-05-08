// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Build a constructor to store event names
  constructor() {
    // Create object where the key is the eventName and
    // the value is an array of callbacks
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    // Set the key and values array
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]) {
      // Delete events from the array
      delete this.events[eventName];
    }
  }
}

module.exports = Events;
