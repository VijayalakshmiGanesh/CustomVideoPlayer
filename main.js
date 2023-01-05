let video = document.querySelector("video")
let playButton = document.querySelector("#playButton")
let volume = document.querySelector("#volume")
let playBack = document.querySelector("#playBack")
let skip = document.querySelectorAll('[data-skip]');

function PlayPause(){
   if(video.paused){
        video.play()
        playButton.value="❚❚";
        
   }else{
        video.pause()
        playButton.value="▶"
   }
}

video.addEventListener("click", PlayPause)
playButton.addEventListener("click", PlayPause)
