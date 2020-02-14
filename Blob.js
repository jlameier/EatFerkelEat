// object libraries

function Blob(x, y, r, icon){

    // alternative constructor
    this.pos = createVector(x,y);
    this.vel = createVector(0, 0);
    this.r = r; // fattie McFettFett
    this.icon = icon

    this.update = function(){
        // blob should follow the mouse with direction + speed
        let vel = createVector(mouseX-width/2, mouseY-height/2);
        // vel.sub(this.pos);
        vel.setMag(log(vel.mag())/(0.03*this.r));
        this.vel.lerp(vel, 0.1);
        this.pos.add(this.vel);
    }


    this.eats = function(other){
        let blobs_dist = this.pos.dist(other.pos);
        var d = p5.Vector.dist(this.pos, other.pos);
        // console.log(blobs_dist);
        if (blobs_dist < this.r + other.r){
            //blobs eats other
            var sum_a = PI * (this.r * this.r + other.r * other.r);
            this.r = (sqrt(sum_a/PI));
            // console.log("Blob eats " + blobs_dist);
            // console.log("blob.r = " + this.r)
            return true;
            
        } else {
            return false;
        }    
    }

    this.show = function(){
        fill(255);
        noStroke();
        // ellipse(this.pos.x,this.pos.y,this.r * 2, this.r * 2);
        image(this.icon, this.pos.x -this.r/2, this.pos.y -this.r/2, 2*this.r, 2*this.r);
        // ellipse(this.pos.x , this.pos.y, 2*this.r, 2*this.r)
        // rect(this.pos.x -this.r/2, this.pos.y -this.r/2, this.r, this.r)
        // console.log(this.r);
    }















    // nothing beyond here
}