let songs=[
{
    songName: "Theme",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg"
},
{
    songName: "Pirates",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg"
},
{
    songName: "C",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg"
},
{
    songName: "D",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg"
},
{
    songName: "E",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg"
},
{
    songName: "F",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg"
},
{
    songName: "G",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg"
},
{
    songName: "H",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg"
},
{
    songName: "I",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg"
},
{
    songName: "J",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg"
}
];

let songsIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem= Array.from( document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    m
    }    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

});

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

});

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add( 'fa-play-circle');    
    });
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

   element.addEventListener('click',(e)=>{
       songsIndex= parseInt(e.target.id);
       makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src= `songs/${songsIndex + 1}.mp3`;
    masterSongName.innerText=songs[songsIndex].songName;
  
   audioElement.currentTime=0;
    if(audioElement.paused ||audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
       
    }
   
   });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songsIndex>=9)
    {
        songsIndex=0;
    }
    else
    {
        songsIndex+=1;

    }
    audioElement.src= `songs/${songsIndex + 1}.mp3`;
    masterSongName.innerText=songs[songsIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity(1);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songsIndex<=0)
    {
        songsIndex=0;
    }
    else
    {
        songsIndex-=1;

    }
    audioElement.src= `songs/${songsIndex + 1}.mp3`;
    masterSongName.innerText=songs[songsIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity(1);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});