let video = document.querySelector("video")
let playButton = document.querySelector("#playButton")
let volume = document.querySelector("#volume")
let playBack = document.querySelector("#playBack")
let skip = document.querySelectorAll('[data-skip]')
let fullScreen = document.querySelector("#fullScreen")
let progressBar = document.querySelector(".progressFilled")
let fullScreenFlag = false;
function PlayPause(){
     video.paused? video.play(): video.pause()
}

function updateButton(){
     video.paused?playButton.value="▶":playButton.value="❚❚"
}
function MakeFullScreen(){
     if(!fullScreenFlag)
          video.requestFullscreen();
     else{
          if (video.exitFullscreen) {
               video.exitFullscreen();
              } else if (video.msExitFullscreen) {
               video.msExitFullscreen();
              } else if (video.mozCancelFullScreen) {
               video.mozCancelFullScreen();
              } else if (video.webkitExitFullscreen) {
               video.webkitExitFullscreen();
              }
     }
          
     fullScreenFlag = !fullScreenFlag
     console.log(fullScreenFlag)
     console.log(video.exitFullscreen)
}
function VolumeRangleSlider(e){
    video.volume=this.value
}
function playbackRangleSlider(e){
     video.playbackRate=this.value
 }

 function skipSecs(){
     video.currentTime+=parseFloat(this.dataset.skip)
 }
function progressBarHandler(){
     let percent = (video.currentTime/video.duration)*100
     progressBar.style.flexBasis = `${percent}%`
     progressBar.style.width=`${percent}%`
    
}
function progressBarUpdate(e){
   let time=(e.offsetX/progressBar.offsetWidth)*video.duration;
   video.currentTime = time;
}
video.addEventListener("click", PlayPause)
playButton.addEventListener("click", PlayPause)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
fullScreen.addEventListener("click",MakeFullScreen)
skip.forEach(btn => btn.addEventListener("click", skipSecs))
volume.addEventListener("change", VolumeRangleSlider)
playBack.addEventListener("change",playbackRangleSlider)
progressBar.addEventListener("change", progressBarHandler)
video.addEventListener("timeupdate", progressBarHandler)
progressBar.addEventListener("click", progressBarUpdate)
