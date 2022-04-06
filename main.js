music=music.mp3;
music2=music2.mp3;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    song = loadSound(music);
    song1= loadSound(music2);
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("Left wrist X= " + leftwristx + "Left wrist Y= " + leftwristy);
    console.log("Right wrist X= " + rightwristx + "Right wrist Y= " + rightwristy);
    }
}