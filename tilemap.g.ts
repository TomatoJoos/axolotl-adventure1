// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070707070700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007070707070000000000000000000000000000000000000000000000000000000000000707070707000000000000000000000707070707000000000000000000000000000700000000000000000007000000000000070707070700000000000700000000070707070700070700000000000700000007070000000006010101010101000000000001010101010000000007000700000007070707070001010101000000070000010101000004040403030303030300000000000303030303000000070000000700000101010101000303030300010101010003020300000404040000000000000000000700000000000000000101010101010100030303030300000000000003030303000003000000000000000000000000010101010000000000000000000202020202000000000000000000000000000000000000000000000000000000000000000003020203000000000000000000000303030000000000000000000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
222222.....22222................2222......222..222
222222.....22222..........22222.2222.2222.222..222
..................2222222.22222......2222..2......
......2222.........22222..........................
......2222..........222...........................
.......22.........................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile2":return tile2;
            case "tile0":
            case "tile3":return tile3;
            case "tile5":
            case "tile1":return tile1;
            case "tile6":
            case "tile4":return tile4;
            case "tile7":
            case "tile5":return tile5;
            case "tile8":
            case "tile6":return tile6;
            case "myTile":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
