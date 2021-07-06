song_1 = "";
song_2 = "";

function preload() {
    song_1 = loadSound("Sia - Cheap Thrills (Audio) [YTmp3.net].mp3");
    song_2 = loadSound("Justin Bieber – Despacito (Lyrics) 🎤 ft. Luis Fonsi & Daddy Yankee [Pop] [YTmp3.net].mp3")
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function Click_here() {
    window.location.href = "";
}

function AI_MUSIC() {
    window.location.href = "";
}