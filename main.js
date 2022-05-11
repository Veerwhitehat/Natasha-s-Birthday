function preload() {
    
}
function setup() {
    
    canvas=createCanvas(640,480);
    canvas.position(450,30);
    video= createCapture(VIDEO);
    video.hide();
  
    
}
function draw() {
    
    image(video,0,0,640,480);
   fill ("yellow");
   stroke("black");
   circle (30,30,50);
   circle (610,30,50);
   circle (30,450,50);
   circle (610,450,50);
   fill ("aqua");
   stroke("black");
   rect (90,40,450,20);
   rect (90,425,450,20);
   rect (70,65,20,350);
   rect (540,65,20,350);

}
function take_snapshot() {
    
    save("Birthday.png");

}