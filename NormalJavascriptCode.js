(() => {
let youtubeClientCheck = document.getElementById("youtubeClientContainer")
if (youtubeClientCheck) {youtubeClientCheck.remove()}
let youtubeStyleCheck = document.getElementById("youtubeClientStyle")
if (youtubeStyleCheck) {youtubeStyleCheck.remove()}
  
const youtubeClientCSS = `#youtubeClientContainer {
  margin: 20px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  border: 2px solid #EEEEEE;
  border-radius: 8px;
  padding: 15px 13px 2px 2px;
  background: white;
  box-shadow: 1px 1px 8px rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;;
}

#youtubeClientContainer #closeButton {
  position: absolute;
  background: none;
  top: 0px;
  right: 0px;
  padding: 0px;
  margin: 3px;
  border: none;
  color: #FF0000;
  cursor: pointer;
  font-family: "times";
  font-size: 12px;
}

#youtubeClientContainer #speedButton {
  background: #FF0000;
  padding: 5px;
  margin: 2px;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: "arial";
  font-size: 12px;
}`

const youtubeClientStyle = document.createElement("style")
youtubeClientStyle.id = "youtubeClientStyle"
youtubeClientStyle.innerText = youtubeClientCSS
document.head.appendChild(youtubeClientStyle)

const youtubeClientContainer = document.createElement("div")
youtubeClientContainer.id = "youtubeClientContainer"
const closeButton = document.createElement("button")
closeButton.id = "closeButton"
closeButton.onclick = () => {document.getElementById('youtubeClientContainer').remove();document.getElementById('youtubeClientStyle').remove();}
closeButton.innerText = "X"
youtubeClientContainer.appendChild(closeButton)

const skipButton = document.createElement("button")
skipButton.id = "speedButton"
skipButton.onclick = () => {skipAd()}
skipButton.innerText = "Skip Ad"
youtubeClientContainer.appendChild(skipButton)

const speedButton = document.createElement("button")
speedButton.id = "speedButton"
speedButton.onclick = () => {setSpeed(parseFloat(prompt('Enter your desired playback speed:')))}
speedButton.innerText = "Set Speed"
youtubeClientContainer.appendChild(speedButton)

const volumeButton = document.createElement("button")
volumeButton.id = "speedButton"
volumeButton.onclick = () => {setVolume(parseFloat(prompt('Enter your desired volume (1-100):')))}
volumeButton.innerText = "Set Volume"
youtubeClientContainer.appendChild(volumeButton)

const brightnessButton = document.createElement("button")
brightnessButton.id = "speedButton"
brightnessButton.onclick = () => {setBrightness(parseFloat(prompt('Enter your desired playback speed:')))}
brightnessButton.innerText = "Set Brightness"
youtubeClientContainer.appendChild(brightnessButton)

document.body.appendChild(youtubeClientContainer)


const skipAd = () => {
  var video = document.getElementsByTagName("video")[0];
  video.currentTime = video.duration
}
const setSpeed = (speed) => {
  var video = document.getElementsByTagName("video")[0];
  video.playbackRate = speed
}
const setVolume = (volume) => {
  var video = document.getElementsByTagName("video")[0];
  if (video.volume <= 100 && video.volume >= 0) {
    video.volume = volume / 100
  } else if (video.volume > 100) {
    alert("The video's volume cannot go above 100%")
  } else {
    alert("The video's volume cannot go into the negatives! What would that even do?")
  }
}
const setBrightness = (brightness) => {
  var video = document.getElementsByTagName("video")[0];
  video.style.filter = `brightness(${brightness})`
}
})()
