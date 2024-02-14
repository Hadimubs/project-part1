objects=[];
status="";
function setup(){
canvas=createCanvas(480,380);
canvas.center()
video=createCapture(VIDEO);
video.size(480,380)
video.hide()
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",ModelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    object_name=document.getElementById("object_name").value;

    }
    function ModelLoaded(){
    console.log("Model Is Loaded");
    status=true;
    }
    function draw(){
        image(video,0,0,480,380);
        if (status != "") {
         
        objectDetector.detect(video, gotResult);
    for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="status - objects detected";
    fill("red");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
    }
    function gotResult(error,results){
        if ((error)) {
        console.log(error);
        }
        console.log(results);
        objects=results;
        }