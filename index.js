const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 512;
ctx.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.5;
class Sprit {
  constructor({position ,velocity}) {
  this.position =  position;
  this.velocity = velocity
    this.height = 150;
  }
  draw() {
ctx.fillStyle = 'red';
ctx.fillRect(this.position.x, this.position.y,50, this.height );

  }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y  >= canvas.height) {
        this.velocity.y = 0;

      }else {
        this.velocity.y += gravity;
      }

            
        }

        }



const player = new Sprit({position:{x: 0, y:0}, velocity:{x: 0, y: 10}});

const enemy = new Sprit({position:{x: 900, y:0}, velocity:{x: 0, y: 10}});
  function anmation  (){
      window.requestAnimationFrame(anmation)
      ctx.fillStyle = 'black'
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update()
        enemy.update()
    }
    
    anmation();
    window.addEventListener('keydown', (e) => {
     switch (e.key) {
       
        case 'a':
          player.velocity.x = -10;
          break;
        case 'd':
          player.velocity.x = 10;
          break;
      }

    });
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'w':
          player.position.y === 362 ?  player.velocity.y = -15  : null;
          break;
        case 'a':
          player.velocity.x = 0;
          break;
        case 'd':
          player.velocity.x = 0;
          break;
      }

    });

  



