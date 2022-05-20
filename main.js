nosex=0;
nosey=0;
img="";

function preload(){
img=loadImage("https://i.postimg.cc/V6cs3T2Z/6876092-preview-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(350,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,350,400);
    image(img,nosex,nosey,40,30);
}

function take_pic(){
    save("My Pic.png");
   
}

function modelLoaded(){
    console.log("poseNet Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x -15;
        nosey=results[0].pose.nose.y +30;
    }
}