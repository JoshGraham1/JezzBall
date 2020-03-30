let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//super object...our magic paint brush that draws what we want
let context = canvas.getContext('2d');

// // first argument pertains to the x coordinate within the canvas
// // second argument pertains to the 7 coordinate within the canvas
// // third argument pertains to the width of the object being drawn
// // fourth argument pertains to the height of the object being drawn
// // fillStyle will change the colors of the preceding rectangles
// context.fillStyle = 'rgba(255, 0, 0, 0.5)';
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = 'rgba(0, 0, 255, 0.5)';
// context.fillRect(200, 200, 100, 100);
// context.fillStyle = 'rgba(0, 255, 0, 0.5)';
// context.fillRect(300, 300, 100, 100);
// console.log(canvas);

// // Line
// context.beginPath();
// context.moveTo(100, 300);
// context.lineTo(300, 100);
// context.strokeStyle = 'purple';
// context.stroke();
// context.beginPath();
// context.moveTo(200, 400);
// context.lineTo(400, 200);
// context.strokeStyle = 'orange';
// context.stroke();
// context.beginPath();
// context.moveTo(100, 300);
// context.lineTo(200, 400);
// context.strokeStyle = 'black';
// context.stroke();
// context.beginPath();
// context.moveTo(300, 100);
// context.lineTo(400, 200);
// context.strokeStyle = 'black';
// context.stroke();

// // Arc / Circle
// // context.beginPath();
// // context.arc(300, 300, 30, 0, Math.PI * 2, false);
// // context.strokeStyle = 'blue';
// // context.stroke();

// for (let i = 0; i < 6; i++) {
  //   let x = Math.random() * window.innerWidth;
  //   let y = Math.random() * window.innerHeight;
  //   let colors = [
    //     'red',
    //     'blue',
    //     'yellow',
    //     'green',
    //     'purple'
    //   ];
    //   let randomIndex = Math.floor(Math.random() * colors.length);
    //   context.beginPath();
    //   context.arc(x, y, 30, 0, Math.PI * 2, false);
    //   context.strokeStyle = colors[randomIndex];
    //   context.stroke();
    // }

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }

      this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'blue';
        context.stroke();
        context.fill();
      }
    }

    let circleCollection = [];
    
    for (let i = 0; i < 6; i++) {
      let radius = 20;
      let x = Math.random() * (innerWidth - radius * 2) + radius;
      let y = Math.random() * (innerHeight - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 8;
      let dy = (Math.random() - 0.5) * 8;
      
      circleCollection.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, innerWidth, innerHeight);
      circleCollection.forEach(circle => {
        circle.update();
      });
    }

    animate();