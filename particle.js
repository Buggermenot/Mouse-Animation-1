class Particle {
    constructor (x, y) {
        this.pos = createVector(x, y);
        this.angle = radians(random(0, 360, 10));
        // this.dir = p5.Vector.fromAngle(radians(random(0, 360, 10)));
        this.velocity = random(10, 30);
        this.size = random(10,30);
        this.size *= random(0.3, 2);
        this.color = random(colors);
        this.step = 0;
    }

    update () {
        this.angle += random([-1, 1]) * random(0.05, 0.2);
        this.dir = p5.Vector.fromAngle(this.angle);
        this.dir.setMag(this.velocity);
        const deltaV = this.dir.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
        this.velocity *=  0.95;
    }
    show () {
        fill(this.color);
        noStroke();
        this.pos.x += random(-0.5, 0.5);
        this.pos.y += random(-0.5, 0.5);
        circle(this.pos.x, this.pos.y, this.size);
        this.size *= 0.96;
        this.update();
    }
}
