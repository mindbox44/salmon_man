# mine stone

def on_hit_tile(sprite):
    music.knock.play()
    stove.set_image(img("""
        . . . . . e e e e e e . . . . . 
                . . . . . e d d d d e . . . . . 
                . . . . . d a d d a d . . b b b 
                . . . . . d d d d d d . . . e . 
                . . . . . d e d d e d . . . e . 
                . . . . . d e e e e d . . . e . 
                . . . 6 6 6 6 6 6 6 6 6 6 d d d 
                . . . 6 6 6 6 6 6 6 6 6 6 d d d 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d a a a a 6 6 . . . . . 
                . . . . . a a a a a a . . . . . 
                . . . . . a a . . a a . . . . . 
                . . . . . a a . . a a . . . . . 
                . . . . . b b . . b b . . . . .
    """))
scene.on_hit_tile(SpriteKind.player, 11, on_hit_tile)

# place block

def on_a_pressed():
    global block
    block = sprites.create_projectile_from_sprite(img("""
            4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 
                    e e e e e e e e e e e e e e e e 
                    4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 
                    4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 
                    e e e e e e e e e e e e e e e e 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
                    4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 
                    e e e e e e e e e e e e e e e e 
                    4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 
                    4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    e e e e e e e e e e e e e e e e
        """),
        stove,
        0,
        0)
    music.knock.play()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# kill crapper

def on_on_overlap(sprite, otherSprite):
    crapper.destroy()
    music.zapped.play()
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

def on_hit_tile2(sprite):
    info.change_life_by(-10)
scene.on_hit_tile(SpriteKind.player, 4, on_hit_tile2)

def on_hit_tile3(sprite):
    scene.set_tile_map(img("""
        44444444444444444444444444444444
                44444444422222222222224444444444
                44444222222222222222222224444444
                44442222222222222222222222444444
                44422222222222222222222222244444
                44422222222222222222222222224444
                44222222222222222222222222222444
                44222222222222222222222222222444
                42222222222222222222422222222244
                42222222222222222244442222222244
                42222222222222222444442222222244
                42222222222222222444444222222244
                42222222222222222444444222222244
                42222222222222222444444422222244
                42222222222222222444444422222244
                42222222222222222444444422222244
                42222222222222222244444422222244
                42222222222222222244444422222244
                42222222222222222224444442222244
                42222222222222222224444442222244
                42222222222222222222444422222244
                44222222222222222222242222222244
                44222222222222222222222222222244
                44222222222222222222222222222244
                44222222222222222222222222222244
                44222222222222222222222222222444
                44222222222222222222222222224444
                44422222222222222222222222224444
                44422222222222222222222222224444
                44444222222222222222222222244444
                44444422222222222222222244444444
                44444444444444444444444444444444
    """))
    music.sonar.play()
scene.on_hit_tile(SpriteKind.player, 15, on_hit_tile3)

# tree punch

def on_on_overlap2(sprite, otherSprite):
    music.knock.play()
    tree.destroy()
    stove.set_image(img("""
        . . . . . e e e e e e . . . . . 
                . . . . . e d d d d e . . . . . 
                . . . . . d a d d a d . . e e e 
                . . . . . d d d d d d . . . e . 
                . . . . . d e d d e d . . . e . 
                . . . . . d e e e e d . . . e . 
                . . . 6 6 6 6 6 6 6 6 6 6 d d d 
                . . . 6 6 6 6 6 6 6 6 6 6 d d d 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d 6 6 6 6 6 6 . . . . . 
                . . . d d a a a a 6 6 . . . . . 
                . . . . . a a a a a a . . . . . 
                . . . . . a a . . a a . . . . . 
                . . . . . a a . . a a . . . . . 
                . . . . . b b . . b b . . . . .
    """))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

# Crapper explosion

def on_on_overlap3(sprite, otherSprite):
    crapper.set_image(img("""
        ................................
                .......44444444444444444........
                ....444444444444444444444.......
                ...444444444444444444444444.....
                ..4444444444444444444444444.....
                ..44444444444444444444444444....
                ..44444444444444444444444444....
                ..44444444444444444444444444....
                ..44444444444444444444444444....
                ...4444444444444444444444444....
                ....44444444444444444444444.....
                .......44444444444444...........
                ..........44444444..............
                ..........44444444..............
                ..........44444444..............
                ..........44444444..............
                ..........44444444..............
                ...........4444444..............
                ...........4444444..............
                ...........444444...............
                ...........444444...............
                ...........444444...............
                ...........444444...............
                ...........4444444..............
                ...........4444444..............
                ...........4444444..............
                ..........44444444..............
                ..........444444444.............
                .........44444444444............
                ........4444444444444...........
                ......44444444444444444.........
                .....4444444444444444444........
    """))
    music.zapped.play()
    info.change_life_by(-10)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

block: Sprite = None
crapper: Sprite = None
tree: Sprite = None
stove: Sprite = None
game.splash("craftmine")
scene.set_tile_map(img("""
        888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            8888888888888888888ddddddddddd888888888888888888
            88888888888888888dd77777777777dd8888888888888888
            888888888888888dd777777777777777dd88888888888888
            88888888888888d7777777777777777777d8888888888888
            8888888888888d777777777777777777777d888888888888
            888888888888d777777bbbbbbbbbbbbb7777d88888888888
            888888888888d777bbbbbbbbbbbbbbbbb777d88888888888
            88888888888d777bbbbbbbbbbbbbbbbbbbb77d8888888888
            88888888888d77bbbbbbbbbbbbbbbbbbbbb77d8888888888
            8888888888d777bbbbbbbbbbbbbbbbbbbbb777d888888888
            8888888888d777bbbbbbbbbbbbbbbbbbbbb777d888888888
            8888888888d777bbbbbbbddffffddbbbbbb777d888888888
            8888888888d777bbbbbddddfaafdddbbbbb777d888888888
            8888888888d777dddddddddfaafdddddddd777d888888888
            8888888888d777dddddddddfaafdddddddd777d888888888
            8888888888d777dddddddddffffdddddddd777d888888888
            8888888888d777dddddddddddddddddddd7777d888888888
            8888888888d7777dddddddddddddddddd77777d888888888
            8888888888d77777ddddddddddddddddd77777d888888888
            8888888888d777777ddddddddddddddd777777d888888888
            88888888888d7777777dddddddddddd777777d8888888888
            88888888888d7777777777ddddddd77777777d8888888888
            888888888888d77777777777777777777777d88888888888
            888888888888d77777777777777777777777d88888888888
            8888888888888d777777777777777777777d888888888888
            88888888888888d7777777777777777777d8888888888888
            888888888888888dd777777777777777dd88888888888888
            88888888888888888dd77777777777dd8888888888888888
            8888888888888888888ddddddddddd888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888
    """),
    TileScale.SIXTEEN)
# stove
stove = sprites.create(img("""
        . . . . . e e e e e e . . . . . 
            . . . . . e d d d d e . . . . . 
            . . . . . d a d d a d . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . d e d d e d . . . . . 
            . . . . . d e e e e d . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . d d 6 6 6 6 6 6 d d . . . 
            . . . d d 6 6 6 6 6 6 d d . . . 
            . . . d d 6 6 6 6 6 6 d d . . . 
            . . . d d a a a a 6 6 d d . . . 
            . . . . . a a a a a a . . . . . 
            . . . . . a a . . a a . . . . . 
            . . . . . a a . . a a . . . . . 
            . . . . . b b . . b b . . . . .
    """),
    SpriteKind.player)
stove.set_position(384, 575)
info.set_life(20)
# tiles
scene.set_tile(11,
    img("""
        c c c c c c f b b b f d d d d c 
            c c d d d f c f f f d b b b b d 
            f d b b b f c c c c d b b b b b 
            f d b b b f c c c c d b b b b b 
            f d b b b f c d d c d b b b b f 
            c c f f f c d b b b f b b f f c 
            d d c c c d b b b b f f f c d d 
            b f c c c d b b b b f c c d b b 
            b f c c c c f b b f f c c d b b 
            b f c d d d c f f c d d d f b b 
            f c d b b b b c c c d b b b f f 
            c d b b b b b f c d b b b b f c 
            c d b b b b b f c d b b b b f c 
            c d b b b b f c c f f b b b f c 
            c f b b b f f d d d d f f f c c 
            c c f f f c d b b b b f c c c c
    """),
    True)
scene.set_tile(7,
    img("""
        7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 
            7 7 6 6 7 7 7 6 6 7 7 6 6 7 7 7 
            6 6 6 7 6 7 6 7 7 6 7 6 6 7 6 7 
            7 6 6 7 6 6 7 7 7 6 6 7 7 6 6 7 
            7 6 7 7 7 6 7 7 7 6 6 7 7 6 6 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 6 6 7 7 7 6 6 7 7 6 6 6 7 7 
            7 7 6 6 6 7 6 6 6 7 6 6 7 7 6 7 
            7 7 6 7 6 6 6 7 6 6 6 7 7 7 6 6 
            7 6 7 7 7 6 7 7 7 6 7 7 7 7 7 6 
            6 6 7 7 6 7 7 7 7 7 7 7 6 7 7 7 
            7 7 7 6 6 7 7 6 6 7 7 7 6 6 7 7 
            7 7 7 6 6 6 7 6 6 6 7 6 6 6 6 7 
            7 7 6 7 7 6 6 6 7 6 6 6 7 7 6 7 
            7 6 7 7 7 6 6 7 7 7 6 6 7 7 6 6 
            7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    """),
    False)
scene.set_tile(13,
    img("""
        d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d e d 
            d d e d d d d d d e d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d e d d d 
            d d e d d d d d d d d d d d d d 
            d d d d d d d e d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d e d d d d d e d d d d d 
            d d d d d d d d d d d d d d d d 
            d e d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d e d d 
            d d d d d d d e d d d d d d d d 
            d d d d d d d d d d d d d d d d
    """),
    False)
scene.set_tile(8,
    img("""
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 9 9 9 8 8 8 8 8 9 9 8 8 8 
            8 9 9 9 8 9 9 8 8 9 9 9 9 9 8 8 
            8 9 8 8 8 8 9 9 9 9 8 8 8 9 9 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 
            8 8 8 9 9 9 9 9 8 8 9 9 9 8 8 8 
            8 8 9 8 8 8 8 9 9 9 9 8 9 9 8 8 
            8 9 8 8 8 8 8 8 8 8 8 8 8 9 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 9 9 9 9 9 8 9 9 9 9 8 8 
            8 9 9 8 8 8 8 8 9 9 9 8 8 9 9 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    """),
    False)
scene.set_tile(10,
    img("""
        a a a a a a a a a a a a a a a a 
            a a a a a 3 3 3 3 3 3 3 a a a a 
            a a a 3 3 3 a a a a a 3 3 3 a a 
            a a 3 3 a a a a a a a a a 3 a a 
            a 3 3 a a a 3 3 3 3 3 a a a 3 3 
            a 3 a a a 3 3 a a a 3 3 a a a 3 
            a 3 a a a 3 a a a a a 3 a a a 3 
            a 3 a a a 3 3 a a a a a a a a 3 
            a 3 a a a a 3 a a a a a a 3 3 a 
            a 3 a a a a a 3 3 3 3 3 3 3 a a 
            a 3 3 a a a a a a a a a a a a a 
            a a 3 a a a a a a a a a a a a a 
            a a 3 3 a a a a a a a 3 a a a a 
            a a a 3 3 a a 3 3 3 3 a a a a a 
            a a a a 3 3 3 a a a a a a a a a 
            a a a a a a a a a a a a a a a a
    """),
    False)
scene.set_tile(15,
    img("""
        f f f f f f f f f f f f f c c c 
            f f f f c c f f f f f f f f c c 
            f f c c c c f f f c c f f f f c 
            f c c c c c f f f c c f f f f f 
            f f f f f f f f c c c f f f f f 
            f f f f f f f f c c c f f f f f 
            f f f f f f f f f f f f c c c f 
            f f f f f f f f f f f f c c c f 
            f f f c c c f f f f f f c c f f 
            f f f c c c f f f f f f f f f f 
            f f f f c c f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f c c f f f f f 
            f f c c f f f f f c c f f c c c 
            f c c c f f f f c c c f f f c c 
            f c c c f f f f f f f f f f f c
    """),
    True)
scene.set_tile(2,
    img("""
        e e e e e e e 2 2 2 e 2 2 2 2 e
        e e 2 2 2 e e e e e 2 2 2 2 2 2
        e 2 2 2 2 e e e e e 2 2 2 2 2 2
        e 2 2 2 2 e e e e e 2 2 2 2 2 2
        e 2 2 2 2 e e 2 2 e 2 2 2 2 2 e
        e e e e e e 2 2 2 2 e 2 2 e e e
        2 2 e e e 2 2 2 2 2 e e e e 2 2
        2 e e e e 2 2 2 2 2 e e e 2 2 2
        2 e e e e e e 2 2 e e e e 2 2 2
        2 e e 2 2 2 e e e e 2 2 2 e 2 2
        e e 2 2 2 2 2 e e e 2 2 2 2 e e
        e 2 2 2 2 2 2 e e 2 2 2 2 2 e e
        e 2 2 2 2 2 2 e e 2 2 2 2 2 e e
        e 2 2 2 2 2 e e e e e 2 2 2 e e
        e e 2 2 2 e e 2 2 2 2 e e e e e
        e e e e e e 2 2 2 2 2 e e e e e
    """),
    False)
scene.set_tile(4,
    img("""
        4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 5 5 4 4 4 4 4 4 4 5 5 4 4 4 4 
            4 4 4 4 4 4 5 5 4 4 5 5 4 4 4 4 
            4 4 4 4 4 4 4 5 4 4 4 4 4 4 4 4 
            4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 5 5 4 4 4 
            4 4 4 4 4 4 5 5 4 4 4 5 5 4 4 4 
            4 4 4 4 4 4 5 5 4 4 4 4 5 4 4 4 
            4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 5 5 5 4 4 4 4 4 4 4 4 4 
            4 4 4 4 5 5 4 4 4 4 4 4 5 5 4 4 
            5 5 4 4 4 4 4 4 4 4 4 4 5 5 4 4 
            5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    """),
    True)
# tree
tree = sprites.create(img("""
        .........eeeeeeeeeeee...........
            .......ee777777777777e..........
            ......e77777777777777ee.........
            .....e7777777777777777e.........
            ....e777777777777777777e........
            ....e777777777777777777e........
            ....e777777777777777777e........
            ....e777777777777777777e........
            ....e777777777777777777e........
            ....e777777777777777777e........
            .....e7777777777777777e....eee..
            .....e777777777777777e...eee77e.
            ......ee777777777777e....e7777e.
            ........ee777777777e.....e7777e.
            .........eeeeeeeeee.....eee77ee.
            ..........eeeeeeee...eeee..eee..
            ..........eeeeeeee..ee..........
            ..........eeeeeeeeee............
            ..........eeeeeeeee.............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            ..........eeeeeeee..............
            .........eeeeeeeeee.............
            .........eeeeeeeeee.............
            ........eeeeeeeeeeee............
    """),
    SpriteKind.food)
tree.set_position(384, 510)
# controller
controller.move_sprite(stove, 100, 100)
scene.camera_follow_sprite(stove)
# crapper
crapper = sprites.create(img("""
        . . . . f f f f f f f f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 f 7 7 f 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . f 7 f f f f 7 f . . . . 
            . . . . f 7 f 7 7 f 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . f f f 7 7 7 7 7 7 f f f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 f f f f 7 7 7 f . . 
            . . f 7 7 7 f . . f 7 7 7 f . . 
            . . f f f f f . . f f f f f . .
    """),
    SpriteKind.enemy)
crapper.set_position(384, 384)
crapper.follow(stove, 25)