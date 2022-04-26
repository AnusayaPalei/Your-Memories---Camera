function setup(){
    canvas= createCanvas(450,400);
    canvas.position(200,320);
    Video=createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video,0,0,500,500);
}

function take_snapshot(){
    save("file.png");
}