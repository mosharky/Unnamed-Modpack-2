function removals_Atmospheric() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /atmospheric:.*aspen.*/,
        // /atmospheric:.*leaf_pile.*/,
        /atmospheric:.*travertine.*/,
        'atmospheric:orange',
        'atmospheric:blood_orange',
    ])

    global.STRUCTURE_BLOCK_SWAPPER.set(/atmospheric:arid_garden.*/, new Map([
        ['minecraft:chest', 'atmospheric:laurel_chest'],
        ['minecraft:trapped_chest', 'atmospheric:trapped_laurel_chest'],
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set('atmospheric:kousa_sanctum', new Map([
        ['minecraft:chest', 'atmospheric:kousa_chest'],
        ['minecraft:trapped_chest', 'atmospheric:trapped_kousa_chest'],
    ]))
}