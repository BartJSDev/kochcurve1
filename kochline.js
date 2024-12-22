class Kochline {

    constructor(sx, sy, len, angle) {

        this.sx = sx;
        this.sy = sy;
        this.len = len
        this.angle = angle
        this.ex = this.sx + this.len * Math.cos(this.angle)
        this.ey = this.sy + this.len * Math.sin(this.angle)
    }
}
