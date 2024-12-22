class KochCurve {

    constructor(x, y, len, angle, iterations) {

        this.x = x
        this.y = y
        this.len = len
        this.iterations = iterations
        this.segments = []
        this.newsegments = []
        this.angle = angle
        this.sx = 0
        this.sy = 0
        this.subAngle = Math.PI/3

    }

    create() {

        for (var i = 0; i < this.iterations; i++) {

            this.newsegments = []

            //add the first line
            if (this.segments.length === 0) {

                let kochline1 = new Kochline(this.x, this.y, this.len, this.angle)
                this.segments.push(kochline1)


            } else {

                //add the next iteration of lines
                this.segments.forEach(segment => {

                    let newlen = segment.len / 3 
                    let kochline1 = new Kochline(segment.sx, segment.sy, newlen, segment.angle)
                    let kochline2 = new Kochline(kochline1.ex, kochline1.ey, newlen, segment.angle - this.subAngle)
                    let kochline3 = new Kochline(kochline2.ex, kochline2.ey, newlen, segment.angle + this.subAngle)
                    let kochline4 = new Kochline(kochline3.ex, kochline3.ey, newlen, segment.angle)

                    this.newsegments.push(kochline1, kochline2, kochline3, kochline4)
                })

                this.segments = this.newsegments
            }

        }

    }

    draw() {

        c.beginPath()
        c.strokeStyle = "white"

        c.moveTo(this.segments[0].sx, this.segments[0].sy)

        for (var i = 0; i < this.segments.length; i++) {

            c.lineTo(this.segments[i].ex, this.segments[i].ey)
        }

        c.stroke()
        c.closePath()
    }
}