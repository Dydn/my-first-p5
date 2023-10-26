function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 120, 100, 400, 320);
    tint(tint_color);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 40);
    circle(50, 430, 40);
    circle(590, 50, 40);
    circle(590, 430, 40);
    fill("yellow")
    rect(40, 50, 20, 380);
    rect(580, 50, 20, 380);
    rect(60, 50, 540, 20);
    rect(60, 420, 540, 20);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}