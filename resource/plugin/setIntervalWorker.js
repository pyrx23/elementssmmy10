let intervalId

self.onmessage = ({ data }) => {
  const delay = data.delay

  intervalId = setInterval(() => {
    self.postMessage('tick')
  }, delay)
}

self.addEventListener('terminate', () => {
  clearInterval(intervalId)
})
