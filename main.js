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
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song_1.play();
    song_1.setVolume();
    song_1.rate();
}

function Click_here() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-3/";
}

function AI_MUSIC() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-1/";
}
