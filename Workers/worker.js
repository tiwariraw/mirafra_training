self.onmessage = (event) => {
  self.postMessage(`worker received ${event.data}`);
};
