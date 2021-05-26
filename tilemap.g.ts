// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
            case "level2":
            case "level2":return tiles.createTilemap(hex`30001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005020202020400000000000000000000000000000000000000000000000000000000000000000000000000000000000501010101010102040000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010400000000000000000000000000000000000000000000000000000000000000000502020202020101010101010101010102040000000000000000000000000000000000000000000000000000000005020101010101010101010101010101010101010400000000000000000000000005020202020202020202020202020001010101010101010101010101010101010101010102020303030303030302020201010101010101010101010101010701010101010101010101010101010101010101010101010103030303030101010101010101010101010101060606060806060606060606060606060606060606060606060606060606060306060606060606060606060606060606060606060806080808080808080808080808080808080808080808080808080306060606060606060606060606060606060606060808080808080808080808080808080808080808080808080808080306060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
................................................
................................................
................................................
................................................
................................................
..............222222............................
.............222222222..........................
.............2222222222.........................
.......222222222222222222.......................
.....222222222222222222222............2222222222
2222.22222222222222222222222.......2222222222222
2222.222222222222222222222222.....22222222222222
2222.22222222222222222222222222.2222222222222222
2222.2..........................2222222222222222
2222............................2222222222222222
222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile8":return tile8;
            case "tile1":return tile1;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
            case "myTile4":
            case "tile10":return tile10;
            case "myTile5":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
