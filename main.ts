namespace SpriteKind {
    export const COIN = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (axolotl.vy == 0) {
        axolotl.vy = -140
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.COIN, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.confetti, 500)
    music.baDing.play()
})
let coin: Sprite = null
let axolotl: Sprite = null
info.setScore(0)
scene.setBackgroundColor(9)
axolotl = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ...4.......2........
    ....2.....2.........
    .....b3333..........
    ...42f333f22........
    .....b3333..........
    ....2.33..2.........
    ...4.b3b3..2........
    ......3b............
    ....b333b...........
    ...b3.3.3...........
    .....33.33..........
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(axolotl, 100, 0)
tiles.setTilemap(tilemap`level1`)
axolotl.ay = 200
scene.cameraFollowSprite(axolotl)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 5 5 5 5 5 5 5 4 f . . . 
        . . f 4 5 5 5 5 5 5 5 4 f . . . 
        . . f 4 5 5 4 5 4 5 5 4 f . . . 
        . . f 4 5 5 5 4 5 5 5 4 f . . . 
        . . f 4 5 5 4 5 4 5 5 4 f . . . 
        . . f 4 5 5 5 5 5 5 5 4 f . . . 
        . . f 4 4 5 5 5 5 5 5 4 f . . . 
        . . f 4 4 4 5 5 5 5 4 4 f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.COIN)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 4 e 4 4 4 4 f . 5 . . 
        . . . f f f f f 4 e 4 f . . . . 
        . . . f a 3 a 3 f f f f . . . . 
        . . . f a 3 a 3 a 3 a f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 4 e 4 e 4 f f . . . . 
        . 5 . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . 5 . . f e e e e e f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 4 e 4 4 4 4 f . . . . 
        . . . f f f f f 4 e 4 f . . . . 
        . . . f a 3 a 3 f f f f . . . . 
        . . . f a 3 a 3 a 3 a f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 4 e 4 e 4 f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 . f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 4 e 4 4 4 4 f . . . . 
        . . . f f f f f 4 e 4 f . . . . 
        . . . f a 3 a 3 f f f f . . . . 
        . . . f a 3 a 3 a 3 a f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 4 e 4 e 4 f f . . . . 
        . . . . f f f f f f f . . 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
}
