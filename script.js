let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio('songs/Nc.mp3');
let audioBar = document.getElementById('audiobar');
let songs = [
    {songName: "Night Changes", filePath: "songs/Nc.mp3", coverPath: "download.jfif"},
    {songName: "Let me love you", filePath: "songs/lmlu.mp3", coverPath: "lmlu.jfif"},
    {songName: "Shape of You", filePath: "songs/soy.mp3", coverPath: "soy.jfif"},
    {songName: "Movements", filePath: "songs/movements.mp3", coverPath: "movements.jfif"},
    {songName: "Heat Waves", filePath: "songs/hw.mp3", coverPath: "hw.jfif"},
    {songName: "Dusk Till Dawn", filePath: "songs/dtd.mp3", coverPath: "dtd.jfif"},
    {songName: "INDUSTRY BABY", filePath: "songs/ib.mp3", coverPath: "ib.jfif"},
    {songName: "House of Memories", filePath: "songs/hom.mp3", coverPath: "hom.jfif"},
]

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    audioBar.value = progress;
})

audioBar.addEventListener('change',()=>{
    audioElement.currentTime = audioBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}


