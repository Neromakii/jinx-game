const grama = './img/graminha1.png'
const jinx = './img/jinx.png'
const bomba = './img/bombinha.png'



const canvas = document.querySelector("canvas")

const c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 2

console.log(c)





class Player {
    constructor(image2) {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image2 = image2
        this.width = image2.width
        this.height = image2.height
    }

    draw() {
        c.drawImage(this.image2, this.position.x, this.position.y)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

    }

}




let image2 = new Image()
image2.src = jinx
console.log(image2)

let player = new Player(image2)


class Enemies {
    constructor(image3) {
        this.position = {
            x: 1350,
            y: 500
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image3 = image3
        this.width = image3.width
        this.height = image3.height
    }

    draw() {
        c.drawImage(this.image3, this.position.x, this.position.y)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

    }

}
let image3 = new Image()
image3.src = bomba
console.log(image3)

let enemies = new Enemies(image3)


class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width
        this.height = image.height

    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



let image = new Image()
image.src = grama
console.log(image)

let platforms = [new Platform({
        x: 200,
        y: 400,
        image
    }),

    new Platform({ x: 0, y: 600, image }),
    new Platform({ x: 800, y: 250, image }),
    new Platform({ x: 100, y: 600, image }),
    new Platform({ x: 450, y: 600, image }),
    new Platform({ x: 800, y: 600, image }),
    new Platform({ x: 1350, y: 600, image }),
    new Platform({ x: 1420, y: 400, image }),
    new Platform({ x: 1570, y: 250, image }),
    new Platform({ x: 1940, y: 250, image }),
    new Platform({ x: 2540, y: 480, image }),
    new Platform({ x: 2900, y: 200, image }),
    new Platform({ x: 3400, y: 300, image }),
    new Platform({ x: 3100, y: 600, image }),
    new Platform({ x: 3450, y: 600, image }),
    new Platform({ x: 3940, y: 180, image }),
    new Platform({ x: 3800, y: 600, image }),
    new Platform({ x: 4100, y: 400, image }),
    new Platform({ x: 4500, y: 600, image }),
    new Platform({ x: 5050, y: 600, image }),
    new Platform({ x: 5230, y: 430, image }),
    new Platform({ x: 5620, y: 290, image }),
    new Platform({ x: 6000, y: 120, image }),
    new Platform({ x: 6639, y: 600, image }),
    new Platform({ x: 7000, y: 290, image }),
    new Platform({ x: 7595, y: 320, image }),
    new Platform({ x: 8210, y: 460, image }),
    new Platform({ x: 8700, y: 200, image }),
    new Platform({ x: 9000, y: 100, image }),
    new Platform({ x: 9650, y: 600, image }),

]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

let scrollOffset = 0

const mensagemGameOver = {
    sX: 134,
    sY: 153,
    w: 226,
    h: 200,
    x: (canvas.width / 2) - 226 / 2,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            mensagemGameOver.sX, mensagemGameOver.sY,
            mensagemGameOver.w, mensagemGameOver.h,
            mensagemGameOver.x, mensagemGameOver.y,
            mensagemGameOver.w, mensagemGameOver.h
        );
    }
}

function criaPlacar() {
    const placar = {
        pontuacao: 0,
        desenha() {
            contexto.font = '35px "VT323"';
            contexto.textAlign = 'right';
            contexto.fillStyle = 'white';
            contexto.fillText(`${placar.pontuacao}`, canvas.width - 10, 35);
        },
        atualiza() {
            const intervaloDeFrames = 20;
            const passouOIntervalo = frames % intervaloDeFrames === 0;

            if (passouOIntervalo) {
                placar.pontuacao = placar.pontuacao + 1;
            }
        }
    }
    return placar;
}


function init() {

    image2 = new Image()
    image2.src = jinx
    console.log(image2)

    player = new Player(image2)

    image3 = new Image()
    image3.src = bomba
    console.log(image3)

    enemies = new Enemies(image3)

    class Platform {
        constructor({ x, y, image }) {
            this.position = {
                x,
                y
            }

            this.image = image
            this.width = image.width
            this.height = image.height

        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    image = new Image()
    image.src = grama
    console.log(image)

    platforms = [new Platform({
            x: 200,
            y: 400,
            image
        }),

        new Platform({ x: 0, y: 600, image }),
        new Platform({ x: 800, y: 250, image }),
        new Platform({ x: 100, y: 600, image }),
        new Platform({ x: 450, y: 600, image }),
        new Platform({ x: 800, y: 600, image }),
        new Platform({ x: 1350, y: 600, image }),
        new Platform({ x: 1420, y: 400, image }),
        new Platform({ x: 1570, y: 250, image }),
        new Platform({ x: 1940, y: 250, image }),
        new Platform({ x: 2540, y: 480, image }),
        new Platform({ x: 2900, y: 200, image }),
        new Platform({ x: 3400, y: 300, image }),
        new Platform({ x: 3100, y: 600, image }),
        new Platform({ x: 3450, y: 600, image }),
        new Platform({ x: 3940, y: 180, image }),
        new Platform({ x: 3800, y: 600, image }),
        new Platform({ x: 4100, y: 400, image }),
        new Platform({ x: 4500, y: 600, image }),
        new Platform({ x: 5050, y: 600, image }),
        new Platform({ x: 5230, y: 430, image }),
        new Platform({ x: 5620, y: 290, image }),
        new Platform({ x: 6000, y: 120, image }),
        new Platform({ x: 6639, y: 600, image }),
        new Platform({ x: 7000, y: 290, image }),
        new Platform({ x: 7595, y: 320, image }),
        new Platform({ x: 8210, y: 460, image }),
        new Platform({ x: 8700, y: 200, image }),
        new Platform({ x: 9000, y: 100, image }),
        new Platform({ x: 9650, y: 600, image }),

    ]


    scrollOffset = 0

}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platforms.forEach(platform => {
        platform.draw()

    })

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
    }

    if (keys.right.pressed) {
        scrollOffset += 5
        platforms.forEach(platform => {
            platform.position.x -= 5
        })
    } else if (keys.left.pressed) {
        scrollOffset -= 5
        platforms.forEach(platform => {
            platform.position.x += 5
        })
    }



    //colisao da plataforma
    platforms.forEach((platform) => {
            if (
                player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0
            }
        })
        //condição de vitoria
    if (scrollOffset > 9500) {
        init()
        funcao1()
        console.log("you win")
    }
    //condição de derrota
    if (player.position.y > canvas.height) {
        init()



        console.log("you lose")
    }
}

animate()


window.addEventListener("keydown", ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log("left")
            keys.left.pressed = true
                //player.velocity.x -= 1
            break

        case 68:
            console.log("right")
            keys.right.pressed = true
                //player.velocity.x = 2
            break

        case 87:
            console.log("up")
            player.velocity.y -= 17
            break

        case 83:
            console.log("down")
            player.velocity.y += 20
            break
    }
    //console.log(keys.right.pressed)
})



window.addEventListener("keyup", ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log("left")
            keys.left.pressed = false
                //player.velocity.x -= 1
            break

        case 68:
            console.log("right")
            keys.right.pressed = false
                //player.velocity.x = 0
            break

        case 87:
            console.log("up")
            player.velocity.y -= 20
            break

        case 83:
            console.log("down")
            player.velocity.y += 20
            break
    }
    //console.log(keys.right.pressed)
})




Telas.GAME_OVER = {
    desenha() {
        mensagemGameOver.desenha();
    }

}


const globais = {};
let telaAtiva = {};

function mudaParaTela(telaAtiva) {
    telaAtiva = win.js;

    if (telaAtiva.inicializa) {
        telaAtiva.inicializa();
    }
}