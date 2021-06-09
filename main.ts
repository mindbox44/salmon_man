namespace SpriteKind {
    export const nether_enemy = SpriteKind.create()
    export const boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.startCountdown(10)
    salmon.ay = 250
    controller.moveSprite(salmon, 50, 50)
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f c f . . . . . 
            . . . . . . f f f c c . . . . . 
            . . . . . . f f f c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . c c . . . . . . 
            . . . . . . . . c c . . . . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . a a . . . . . . 
            `],
        100,
        true
        )
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f c f f f . . . . . . 
            . . . . . c c f f f . . . . . . 
            . . . . . c c f f f . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . c c . . . . . . . . 
            . . . . . . c c . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f c c c f . . . . . 
            . . . . . . c f c f c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c f f f c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . c c . 8 8 8 8 8 . c c . . 
            . . . c c . 8 8 . 8 8 . c c . . 
            . . . . . . 8 8 . 8 8 . . . . . 
            . . . . . . a a . a a . . . . . 
            `],
        500,
        true
        )
    }
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f c c c f . . . . . 
            . . . . . . c f c f c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c f f f c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . c c . 8 8 8 8 8 . c c . . 
            . . . c c . 8 8 . 8 8 . c c . . 
            . . . . . . 8 8 . 8 8 . . . . . 
            . . . . . . a a . a a . . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-20)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f e f f f . . . . . . 
            . . . . . e e f f f . . . . . . 
            . . . . . e e f f f . . . . . . 
            . . . . . e e e e e . . . . . . 
            c c c . . . f f . . . . . . . . 
            . . c . . . f f . . . . . . . . 
            . e e f f f f f . . . . . . . . 
            . e e f f f f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            `],
        500,
        false
        )
        bullet = sprites.createProjectileFromSprite(img`
            . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . 2 4 4 4 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            2 4 4 4 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            2 4 4 5 5 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            2 4 4 5 5 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            2 2 4 4 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            . 2 2 4 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
            `, salmon, -200, 0)
        music.pewPew.play()
    }
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f f f e f . . . . . 
            . . . . . . f f f e e . . . . . 
            . . . . . . f f f e e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . . . . f f . . . c c c 
            . . . . . . . . f f . . . c . . 
            . . . . . . . . f f f f f e e . 
            . . . . . . . . f f f f f e e . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            `],
        500,
        false
        )
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . 2 4 4 4 2 2 2 
            . . . . . . . . . . . . . . . . . . . . . . . . 2 4 4 4 4 4 4 2 
            . . . . . . . . . . . . . . . . . . . . . . . . 2 4 4 5 5 4 4 2 
            . . . . . . . . . . . . . . . . . . . . . . . . 2 4 4 5 5 4 4 2 
            . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 4 4 4 2 
            . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 4 2 2 
            . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . 
            `, salmon, 200, 0)
        music.pewPew.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (salmon.vy == 0) {
        salmon.vy = -230
        animation.runImageAnimation(
        salmon,
        [img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . e f e f e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . . e f f f e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . f f . f f f f f . f f . . 
            . . . e e . 8 8 8 8 8 . e e . . 
            . . . e e . 8 8 . 8 8 . e e . . 
            . . . . . . 8 8 . 8 8 . . . . . 
            . . . . . . 2 2 . 2 2 . . . . . 
            `],
        500,
        false
        )
        music.pewPew.play()
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, salmon)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    salmon,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f e f f f . . . . . . 
        . . . . . e e f f f . . . . . . 
        . . . . . e e f f f . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("level 2")
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888ffffffff8888888888888888888888888888888888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        88888888888fbffffffffffffffffffffff888888888888888888888888fbbbbbbbb5555555555555555555555555555bbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888fbbbbbb555555555555555555555555555555bbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888fbbbbbb555555555555555555555555555555bbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888fbbbbbb555555555555555555555555555555bbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbf8888888888888888888fffffffbbbbb555555555555555555555555555555bbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbf888888fffffffffffffcccccffbbbbb555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfffffffcccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfccccc444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfccccc444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfccccc444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfccccc444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfccccc444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbb55555555555555555555555555555bbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbb55555555555555555555555555555bbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbb55555555555555555555555555555bbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbb55555555555555555555555555555bbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbb55555555555555555555555555555bbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbb55555555555555bbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfcccccc44444444444cccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfcccccc4444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfcccccc4444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfcccccc4444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888888888888888888888888888888888888888888888888888888
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfcccccc4444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888ffffffffffffffffffffffffff
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccc444444cccccfbbbbbbbb555555555555555555555555bbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbb555555555555555555555555bbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbb555555555555555555555555bbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbb555555555555555555555555bbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbb555555555555555555555555bbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbb555555555555555bbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbb5555555555555555bbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbb5555555555555555bbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        8888888888fbb5555555555555555bbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb5555555555555555bbbbbbfcccc444444444444cccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbb555555bbbbbbfcccc4444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddd555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbfcccc4444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddd555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbfcccc4444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddd555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccc4444444444444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddd555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccc44444444cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddd555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbb5555555555555555555555555555555bbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbb5555555555555555555555555555555bbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb555555555555555bbbbbbbbfccccccccccccccccccccccccfbbbbb5555555555555555555555555555555bbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb555555555555555bbbbbbbbfccccccccccccccccccccccccfbbbbb5555555555555555555555555555555bbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb555555555555555bbbbbbbbfccccccccccccccccccccccccfbbbbb5555555555555555555555555555555bbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb555555555555555bbbbbbbbfccc44444444444444444ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbb555555555555555bbbbbbbbfccc44444444444444444ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccc44444444444444444ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccc44444444444444444ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccc44444444444444444ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddd55555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddd55555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddd55555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddd55555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddd55555555555555555ddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbb555555555bbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbb555555555555555555555555555555bbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbb555555555bbbbbbbbbbbbbbfcccccccccccccccccccccccfbbbb555555555555555555555555555555bbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbb5555555555555bbbbbbbbbbfcccccccccccccccccccccccfbbbb555555555555555555555555555555bbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbb5555555555555555555bbbbfccccccccccccccccccccccccfbbb555555555555555555555555555555bbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbb5555555555555555555bbbbfccccccccccccccccccccccccfbbb5555555555555555555555555bbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbb5555555555555555555bbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbb55555555555555bbbbfccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbb5555555555bbbbfccc444444444444444ccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fdddd55555555555555555dddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfccc444444444444444ccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fdddd55555555555555555dddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfccc444444444444444ccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fdddd55555555555555555dddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfccc444444444444444ccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fdddd55555555555555555dddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfccc444444444444444cccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fdddd55555555555555555dddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        888888888fbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888888888888888888888fddddddddddddddddddddddddd
        `)
    tiles.setTilemap(tilemap`level3`)
    salmon.setPosition(50, 200)
    gayman = sprites.create(img`
        ................5555555.........
        ...............555555555........
        ..............555555d5555.......
        ..............5d5d5dd5dd5.......
        ..............5ffffdffff5.......
        ..............ff11fff11ff.......
        ..............dffffdffffd.......
        ..............ddddddddddd.......
        ...............dddfffdddd.......
        ...............ddddddddd........
        ..............bbbbbbbbbbbbb.....
        .............bbbbbbbbbbbbbbbb...
        1111111.....66666666666666666...
        1111111....b6bbbbbbbbbbbbbbbbb..
        1111111....b6bbbbbbbbbbbbbbbb66.
        .....11...bbb.666666666666666bb.
        ....ddddbb6bb.bbbbbbbbbbbbb.bbbb
        ....ddddbb6bb.6666666666666.bbbb
        ....ddddbbb6..bbbbbbbbbbbbb.6666
        ....ddddbbb...bbbbbbbbbbbbb.bbbb
        ..............6666666666666.bbbb
        ..............bbbbbbbbbbbbb.dddd
        ..............bbbbbbbbbbbbb.dddd
        ..............ccccccccccccc.dddd
        ..............ccccccccccccc.dddd
        ..............ccccccccccccc.....
        ..............cccccc.cccccc.....
        ..............cccccc.cccccc.....
        ..............ccccc...ccccc.....
        ..............ccccc...ccccc.....
        ..............66666...66666.....
        .............666666..666666.....
        `, SpriteKind.boss)
    gayman.setPosition(700, 50)
    gayman.ay = 500
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    tyrone.destroy()
    music.zapped.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    salmon,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f f e f . . . . . 
        . . . . . . f f f e e . . . . . 
        . . . . . . f f f e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . 8 8 . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    gay = sprites.createProjectileFromSprite(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        2222222222222222................................................
        4444444444444444................................................
        5555555555555555................................................
        7777777777777777................................................
        8888888888888888................................................
        aaaaaaaaaaaaaaaa................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, gayman, -100, 0)
    music.magicWand.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    gayman.destroy()
    music.smallCrash.play()
    game.splash("You killed Doctor Gayman!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    info.startCountdown(10)
    info.stopCountdown()
    controller.moveSprite(salmon, 100, 0)
    salmon.ay = 500
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-10)
})
let gay: Sprite = null
let gayman: Sprite = null
let bullet: Sprite = null
let tyrone: Sprite = null
let salmon: Sprite = null
game.splash("the adventures of salmon man")
game.splash("level 1")
tiles.setTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999111199999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555599999999999999
    9999999999999999111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555559999999999
    9999999999999991111111111111111111111111111999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999955555555555555599999999
    9999999999999911111111111111111111111111111199999999911111111111111199999999999999999999999999999999999999999999999999999999999999999999555555555555555559999999
    9999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999995555555555555555555999999
    9999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999955555555555555555555599999
    9999999999999911111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999955555555555555555555559999
    9999999999999911111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999995555555555555555555555555999
    9999999999999911111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999995555555555555555555555555999
    9999999999999991111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999955555555555555555555555555599
    9999999999999999111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999955555555555555555555555555559
    9999999999999999111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999999111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999555555555555555555555555555559
    9999999999999999999999999991111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999955555555555555555555555555559
    9999999999999999999999999991111111111111111111999991111111111111111199999999999999999999999999999999999999999999999999999999999999955555555555555555555555555559
    9999999999999999999999999999111111111111111199999999111111111111111199999999999999999999999999911111999999999999999999999999999999995555555555555555555555555559
    9999999999999999999999999999911111111111119999999999911111111111111999999999999999999999999991111111199999999999999999999999999999995555555555555555555555555599
    9999999999999999999999999999991111111199999999999999999111111111119999999999999999999999999911111111119999999999111199999999999999999555555555555555555555555599
    9999999999999999999999999999999999999999999999999999999991111111199999999999999999999999991111111111119999991111111111999999999999999955555555555555555555555999
    9999999999999999999999999999999999999999999999999999999999911119999999999999999999999999911111111111111999111111111111199999999999999995555555555555555555559999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999555555555555555555599999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111119999999999999999999555555555555555999999
    9999999999999999999999999999999999999999999999966999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999995555555599999999
    9999999999999999999999999999999999999999999999666669999999999999999999999999999999991111111111111111111111111111111111111111111111199999999999999999999999999999
    9999999999999999999999999999999999999999999999666666999999999999999999999999999999911111111111111111111111111111111111111111111111119999999999999999999999999999
    9999999999999999999999999999999999999999999996666666699999999999999999999999999999111111111111111111111111111111111111111111111111111999999999999999999999999999
    9999999999999999999999999999999999999999999966666666669999999999999999999999999999111111111111111111111111111111111111111111111111111999999999999999999999999999
    9999999999999999999999999999999999999999999966666666669999999999999999999999999911111111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999666666666666999999999999999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999999999999996666666666666699999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999966666666666666699999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999666666666666666669999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999666666666666666669999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999996666666666666666669999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999966666666666666666666999999999999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999999999666666666666666666666999999999999999999999911111111111111111111111111111111111111111111111111119999999999999999999999999999
    9999999999999999999999999999999999999666666666666666666666699999999999999999999991111111111111111111111111111111111111111111111111199999999999999999999999999999
    9999999999999999999999999999999999996666666666666666666666699999999999999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999
    9999999999999999999999999999999999966666666666666666666666699999999999999999999999911111111111111111111111111111111111111111111111119999999999999999999999999999
    9999999999999999999999999999999999966666666666666666666666669999996666666999999999911111111111111111111111111111111111111111111111111999999999999999999999999999
    9999999999999999999999999999999999666666666666666666666666669999966666666699999999911111111111111111111111111111111111111111111111111999999999999999999999999999
    9999999999999999999999999999999999666666666666666666666666669999666666666699999999911111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999999666666666666666666666666666996666666666669999999911111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999996666666666666666666666666666966666666666666999999991111111111111199911111111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999996666666666666666666666666666666666666666666999999999111111111119999911111111111199991111111111111111999999999999999999999999999
    9999999999999999999999999999999996666666666666666666666666666666666666666666999999999111111111999999999111111199999991111111111111119999999999999999999999999999
    9999999999999999999999999999999966666666666666666666666666666666666666666666999999999999999999999999999999999999999999911111111111999999999999999999999999999999
    9999999999999999996669999999999966666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999966999999
    9999999999999999996666999999999966666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999966669999
    9999999999999999966666699999999666666666666666666666666666666666666666666666699999999999999999999999999999999999999999999999999999999999999999999999999666666999
    9999999999999999966666669999999666666666666666666666666666666666666666666666699999999999999666699999999999999999999999999999999999999999999999999999996666666999
    9999999999999999966666666999996666666666666666666666666666666666666666666666699999999999996666669999999999999999999999999999999999999999999999999999966666666699
    9999999999999999966666666699996666666666666666666666666666666666666666666666699999999999966666666999999999999999999999999999999999999999999999999999666666666699
    9999999999999999666666666669996666666666666666666666666666666666666666666666699999999999666666666699999999999999999999999999999999999999999999999999666666666699
    9999999999999999666666666666966666666666666666666666666666666666666666666666699999999996666666666669999999999999999999999999999999999999999999999996666666666699
    9999999999999999666666666666966666666666666666666666666666666666666666666666699999999666666666666666999999999999999999999999999999999999999999999966666666666669
    9999999999999999666666666666966666666666666666666666666666666666666666666666699999996666666666666666699999999999999999999999999999999999999999999966666666666669
    9999999999999996666666666666666666666666666666666666666666666666666666666666669999966666666666666666699999999999999999999999966699999999999999999666666666666669
    9999999999999996666666666666666666666666666666666666666666666666666666666666669999666666666666666666669999999999999999999999666669999999999999996666666666666666
    9999999999999996666666666666666666666666666666666666666666666666666666666666666996666666666666666666669999999999999999999966666666999999999999966666666666666666
    9999999999999966666666666666666666666666666666666666666666666666666666666666666966666666666666666666666999999999999999996666666666999999999999966666666666666666
    9999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999966666666666999999999999666666666666666666
    9999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999996666666666666699999999996666666666666666666
    9999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999966666666666666699999999996666666666666666666
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999666666666666666699999999966666666666666666666
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999996666666666666666699999999666666666666666666666
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999666666666666666666699999999666666666666666666666
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699996666666666666666666669999996666666666666666666666
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699966666666666666666666669999966666666666666666666666
    9999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669666666666666666666666669999666666666666666666666666
    9999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999666666666666666666666666
    9999996666996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666996666666666666666666666666
    9999966666966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666966666666666666666666666666
    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
// stove
salmon = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . f e e e f . . . . . 
    . . . . . . e f e f e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e f f f e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f f f f f f f f f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . e e . 8 8 8 8 8 . e e . . 
    . . . e e . 8 8 . 8 8 . e e . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . . . 2 2 . 2 2 . . . . . 
    `, SpriteKind.Player)
tyrone = sprites.create(img`
    .............eeee...............
    ............eeeeee..............
    ............ededed..............
    ............edddddd.............
    ............ddfddfd.............
    ............ddddddd.............
    ............dddffdd.............
    ............dddddd..............
    .............bddbbb.............
    ...........bbbbbbbbbb...........
    ...........bbbbbbbbbb...........
    ..........bbbbbbbbbbbb..........
    ..........bbbbbbbbbbbb..........
    .........bbbbbbbbbbbbbb.........
    .........bbb.bbbbbb.bbb.........
    .........bbb.bbbbbb.bbb.........
    .........bbb.bbbbbb..bbb........
    .........bb..bbbbbb..bbb........
    .........bb..bbbbbb..bbb........
    .........dd..bbbbbb...dd........
    .........dd..ffffff...dd........
    .............ffffff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............fff.ff.............
    .............bbb.bbb............
    .............bbbbbbbb...........
    `, SpriteKind.Enemy)
tyrone.setPosition(75, 0)
tyrone.follow(salmon, 25)
salmon.setPosition(50, 125)
salmon.ay = 500
controller.moveSprite(salmon, 100, 0)
info.setLife(20)
scene.cameraFollowSprite(salmon)
