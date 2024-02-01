console.log("Welcome to Music App");
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "NCS - Fearless", filePath: "song1.mp3", coverPath: "cover1.jpg"},
    {songName: "NCS - Invisible", filePath: "song2.mp3", coverPath: "cover2.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src ='song2.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
document.getElementById('next').addEventListener('click',()=>{
    audioElement.src = 'song2.mp3';
    audioElement.currentTime=0;
    if (audioElement.paused) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');}
    audioElement.play();
});

document.getElementById('previous').addEventListener('click',()=>{
    audioElement.src = 'song1.mp3';
    audioElement.currentTime=0;
    if (audioElement.paused) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');}
    audioElement.play();
})

document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
    audioElement.volume = parseInt(e.target.value)/100;
})