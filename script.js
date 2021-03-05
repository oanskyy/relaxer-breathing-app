// Select the DOM elements
const container = document.getElementById("container")
const text = document.getElementById("text")
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation() {
  text.innerText = "Inspiră! (Breathe In!)"
  container.className = "container grow"

  setTimeout(() => {
    text.innerText = "Ține respirația! (Hold!)"

    setTimeout(() => {
      text.innerText = "Expiră! (Breathe out!)"
      container.className = "container shrink"
    }, holdTime)
  }, breatheTime)
}

setInterval(breathAnimation, totalTime)
