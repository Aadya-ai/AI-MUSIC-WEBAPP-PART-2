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

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	fill("#00008B");
	stroke("#00008B");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
		}
	}

}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}

function stop() {
    song.stop();
}

function Click_here() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-3/";
}

function AI_MUSIC() {
    window.location.href = "https://aadya-ai.github.io/AI-MUSIC-WEBAPP-PART-1/";
}