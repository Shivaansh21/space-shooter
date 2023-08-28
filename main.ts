controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 5 2 5 2 5 5 5 2 5 2 5 5 2 5 2 
        . 2 5 2 5 5 2 5 5 2 5 2 5 5 2 5 
        . 5 2 5 5 2 5 2 2 5 2 5 5 2 5 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 500)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    scene.cameraShake(4, 500)
})
let Enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect(500)
mySprite = sprites.create(img`
    ..................
    ..................
    ..................
    ..................
    ..................
    .444462...........
    ...66622222222....
    ....6a888388888...
    ....aaa6666666ff66
    ..444aa6666666ff66
    44444a888388888886
    ..44466666666622..
    .....666666222....
    ....6666662.......
    ....666622........
    ...66662..........
    .44446............
    ..................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
mySprite.setStayInScreen(true)
info.setLife(3)
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(2000, function () {
    Enemy_ship = sprites.create(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, SpriteKind.Enemy)
    Enemy_ship.x = scene.screenWidth()
    Enemy_ship.vx = -20
    Enemy_ship.y = randint(10, scene.screenHeight() - 10)
})
