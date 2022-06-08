console.log("welcome to spot")
// initialise the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let MasterPlay = document.getElementById('MasterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let Gif = document.getElementById("Gif")
let MasterSongName = document.getElementById("MasterSongName")
let SongItem = Array.from(document.getElementsByClassName("SongItem"));

let songs = [
    { songName: "Warriyo - Mortals (feat. laura Brehm) [NCS Realese]", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Excuses ", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Mann Bharryaa 2 - Shershaah", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different heaven & EH!DE - my heart", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johning", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Param Sundari - Mimi", filePath: "song/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Oo Bolega Ya Oo Oo Bolega - Pushpa", filePath: "song/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Raataan Lambiyan - Shershaah", filePath: "song/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Saami Saami Hindi - Pushpa", filePath: "song/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Srivalli - Pushpa", filePath: "song/2.mp3", coverPath: "covers/10.jpg" }
];


SongItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})


// handle play pause click
MasterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        Gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        Gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate")
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;
})
const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        Gif.style.opacity = 1;
        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('Next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');

})
document.getElementById('Previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})