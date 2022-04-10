const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 1.5
class Player{
   constructor(){
       this.posisi = {
           x : 100,
           y : 100
       }
       this.kecepatan = {
           x:0,
           y:0
       }
       this.width = 30 
       this.height = 30
   }
   draw() {
       c.fillStyle = 'blue'
       c.fillRect(this.posisi.x,this.posisi.y,
        this.width,this.height)
   }
   update(){
    this.draw()   
    this.posisi.y += this.kecepatan.y 

    if(this.posisi.y + this.height + this.kecepatan.y <= canvas.height)  
    this.kecepatan.y += gravity
     else this.kecepatan.y = 0
   }
}
const player = new Player()

function animasi() {
    requestAnimationFrame(animasi)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
}
animasi()