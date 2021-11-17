leftWirstx = 0;
rightWirstx = 0;
sizeOfDText = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,600);
    video.position(150, 160)
    canvas = createCanvas(550, 430);
    canvas.position(770, 240);
    

    posenet = ml5.poseNet(video, function(){
        console.log("Posenet is Initialised!")
    })
    posenet.on("pose", gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristx = results[0].pose.rightWrist.x;
        leftWristx = results[0].pose.leftWrist.x;
        sizeOfDText = floor(leftWristx - rightWristx);
    }
    
}

function draw(){
    document.getElementById("widthAndHeightSpan").innerHTML = sizeOfDText;
    background("goldenrod")
    textSize(sizeOfDText);
    fill("orange");
    text("Eshaan", 50, 400)
}
