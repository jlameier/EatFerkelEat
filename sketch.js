var Blob;
var blobs = [];
var numblobs = 250;
var zoom;
var remain;


function preload(){
    gsausage = loadImage('images/sausage.png');
    gferkel = loadImage('images/ferkel.png');
}


function setup(){
    createCanvas(screen.width, screen.height);

    blob = new Blob(0, 0, 50, gferkel);
    console.log("Blob created");

    for (let i = 0; i < numblobs; i++){
        blobs[i] = new Blob(random(-2* screen.width, 2* screen.width), random (-2* screen.height, 2* screen.height), 25, gsausage);
        // console.log(i);
    }
    console.log("blobs created");

    remain = createElement('p',"");
    remain.position(20,20);
    remain.style('color', 'white');
}


function draw(){
    background(50);

    translate(width/2-blob.pos.x, height/2-blob.pos.y);

    // scaling by radius
    var newzoom = 50/ blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);

        //if eats, remove small blob
        for (let i = blobs.length -1; i >= 0; i--){
            blobs[i].show();
            if (blob.eats(blobs[i])) {
                blobs.splice(i,1);
            }
        }

        frameRate(60);
        if (blobs.length == 0) { noLoop(); 
        alert("Fettes Ferkel!")}

    blob.update();
    blob.show();
    remain.html("Gelbwürste: " +  blobs.length)
    // console.log(blob.pos);
    
}