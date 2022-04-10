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
    this.posisi.x += this.kecepatan.x    
    this.posisi.y += this.kecepatan.y 

    if(this.posisi.y + this.height + this.kecepatan.y <= canvas.height)  
    this.kecepatan.y += gravity
     else this.kecepatan.y = 0
   }
}
const player = new Player()
const keys = {
    right: {
        pressed: false
    },
    left:{
        pressed: false
    },
}

function animasi() {
    requestAnimationFrame(animasi)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
    if(keys.right.pressed){
        player.kecepatan.x = 5 
    } else if (keys.left.pressed){
        player.kecepatan.x = -5
    } else player.kecepatan.x = 0
}
animasi()

addEventListener('keydown', ({keyCode}) => {
//   console.log(keyCode)
  switch (keyCode){
      case 65:
          console.log('left')
          keys.left.pressed = true
          break
    case 87:
        console.log('up')
        player.kecepatan.y -= 20
        break
     case 68:
        console.log('right')
        keys.right.pressed = true
        break
    case 83:
        console.log('down')
        break    
  }
  console.log(keys.right.pressed)
})

addEventListener('keyup', ({keyCode}) => {
    //   console.log(keyCode)
      switch (keyCode){
          case 65:
              console.log('left')
              keys.left.pressed = false
              break
        case 87:
            console.log('up')
            player.kecepatan.y -= 20
            break
         case 68:
            console.log('right')
            keys.right.pressed = false
            break
        case 83:
            console.log('down')
            break    
      }
      console.log(keys.right.pressed)
    })