let SongIndex = 0;
let AudioElement = new Audio('/songs/1.mp3')
let MasterPlay = document.getElementById('MasterPlay')
let ProgressBar = document.getElementById('ProgressBar')
let MasterSongName = document.getElementById('MasterSongName')
let SongItem = Array.from(document.getElementsByClassName('cards'))
// 
// Names of songs in playlist 
let songs = [
    { songName: "Warriyo - Mortals (feat. laura Brehm) [NCS Realese]",filePath: "songs/1.mp3", coverPath: "img/1.jpg" },
    { songName: "Excuses ",                            filePath: "songs/2.mp3", coverPath: "img/2.jpg"   },
    { songName: "Mann Bharryaa 2 - Shershaah",         filePath: "songs/3.mp3", coverPath: "img/3.jpg"   },
    { songName: "Different heaven & EH!DE - my heart", filePath: "songs/4.mp3", coverPath: "img/4.jpg"   },
    { songName: "Janji-Heroes-Tonight-feat-Johning",   filePath: "songs/5.mp3", coverPath: "img/5.jpg"   },
    { songName: "Param Sundari - Mimi",                filePath: "songs/6.mp3", coverPath: "img/6.jpg"   },
    { songName: "Oo Bolega Ya Oo Oo Bolega - Pushpa",  filePath: "songs/7.mp3", coverPath: "img/7.jpg"   },
    { songName: "Raataan Lambiyan - Shershaah",        filePath: "songs/8.mp3", coverPath: "img/8.jpg"   },
    { songName: "Saami Saami Hindi - Pushpa",          filePath: "songs/9.mp3", coverPath: "img/9.jpg"   },
    { songName: "Srivalli - Pushpa",                   filePath: "songs/10.mp3",coverPath: "img/10.jpg" }
];
// let i=0
// for(i;i<songs.length;i++){
//     let player=`<div class="cards">
//     <img src="/img/${i}.jpg" alt="">
//     <p class="name">song name</p>
//     <i class="btn far SongItemPlay fa-3x fa-play-circle" id="0"></i>
//     </div>`
//     // ProgressBar.innerHTML=player
//     // ;
    

// }
// changing name in html file for songs..
SongItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("name")[0].innerHTML = songs[i].songName;
})
MasterPlay.addEventListener('click', () => {
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play()
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    }
    else {
        AudioElement.pause()
        MasterPlay.classList.remove('fa-pause-circle')
        MasterPlay.classList.add('fa-play-circle')
    }
})
//listen to events

AudioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    Progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);
    ProgressBar.value = Progress;
})
ProgressBar.addEventListener('change', () => {
    AudioElement.currentTime = (ProgressBar.value * AudioElement.duration) / 100;
})
const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        MasterSongName.innerHTML = element
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        MakeAllPlays();
        SongIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        AudioElement.src = `/songs/${SongIndex + 1}.mp3`;
        MasterSongName.innerHTML = songs[SongIndex].songName;
        console.log(songs[SongIndex].songName)
        AudioElement.currentTime = 0;
        AudioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('Next').addEventListener('click', () => {
    if (SongIndex >= 9) {
        SongIndex = 0
    }
    else {
        SongIndex += 1;
    }
    AudioElement.src = `/songs/${SongIndex + 1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].songName;
    AudioElement.currentTime = 0;
    AudioElement.play()
    MasterPlay.target.classList.remove('fa-play-circle');
    MasterPlay.target.classList.add('fa-pause-circle');
})
// MasterSongName.innerHTML='eeeeeeeeee'
document.getElementById('Previous').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 9
    }
    else {
        SongIndex -= 1;
    }
    AudioElement.src = `/songs/${SongIndex + 1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].songName;
    AudioElement.currentTime = 0
    AudioElement.play()
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');

})
// for (i=0;i<)
