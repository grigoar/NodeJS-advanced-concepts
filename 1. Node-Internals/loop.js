// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (like server listening to port)
  // Check three: Any pending long running operations? (Like fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one "tick", each iteration is a "tick"
// this is a simulation of event loop(but the step 3 is important, it will not be terminated, it pauses and waits)
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called ( setTimeout, setInterval)
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callback(when the file is ready, when a request is coming)
  // 3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any "close" events
}

// ----close events example
// readStream.on("close", () => {
//   console.log("Cleanup code");
// });

// exit back to terminal
