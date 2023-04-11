rightShoulderx=0;
rightShouldery=0;
function preload( ){
amongus_shoulder = loadImage('https://i.postimg.cc/fTPNfsKj/sus-removebg-preview.png')
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
image(video, 0, 0, 300, 300);
image(amongus_shoulder, rightShoulderx, rightShouldery, 80, 120)
}
function take_snapshot(){
    save('mysusImage.png');
}
function modelLoaded(){
    console.log('amogus sirvio');
}
function gotPoses(results)
{
    if(results.length >0)
{
    console.log(results);
    rightShoulderx = results[0].pose.rightShoulder.x -50;
    rightShouldery = results[0].pose.rightShoulder.y -100;


    console.log("rightShoulderx ="+ rightShoulderx);
    console.log("rightShouldery ="+ rightShouldery);
}
}