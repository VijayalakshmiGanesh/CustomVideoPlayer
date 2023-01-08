let video = document.querySelector("video")
let playButton = document.querySelector("#playButton")
let volume = document.querySelector("#volume")
let playBack = document.querySelector("#playBack")
let skip = document.querySelectorAll('[data-skip]')
let fullScreen = document.querySelector("#fullScreen")
let progress= document.querySelector(".progress")
let progressBar = document.querySelector(".progressFilled")
let fullScreenFlag = false;
let mousemoveFlag= false;

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
     progressBar.style.width=`${percent}%`   
}

function progressBarUpdate(e){
   let Updatetime=(e.offsetX/progress.offsetWidth)*video.duration;
   video.currentTime = Updatetime;
}

video.addEventListener("click", PlayPause)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("timeupdate", progressBarHandler)

playButton.addEventListener("click", PlayPause)
fullScreen.addEventListener("click",MakeFullScreen)
skip.forEach(btn => btn.addEventListener("click", skipSecs))

volume.addEventListener("change", VolumeRangleSlider)
playBack.addEventListener("change",playbackRangleSlider)

progress.addEventListener("click", progressBarUpdate)
progress.addEventListener("mousemove", () => {
     if(mousemoveFlag)  progressBarUpdate(e)})
progress.addEventListener("mouseup", ()=> mousemoveFlag = false)
progress.addEventListener("mousedown", () => mousemoveFlag= true)



