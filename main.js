noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/HLzrfS6M/4-46492-free-vintage-image-mustache-image-mustache-clipart-transparent-background-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose, noseX, noseY, 80, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet is HERE!!!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        noseY = results[0].pose.nose.y - 10;
        noseX = results[0].pose.nose.x - 15;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}