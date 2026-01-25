function removals_NaturesSpirit() {
    global.REMOVALS.add([
        'natures_spirit:beach_grass',
        'natures_spirit:tall_beach_grass',
        /natures_spirit:.*pink_sand.*/,
        /natures_spirit:.*maple(?!_leaves|_sapling).*/,
        /natures_spirit:chert.*ore/,
        /natures_spirit:.*chalk.*/,
        'natures_spirit:coconut_half',
        'natures_spirit:coconut_shell',
    ])


    global.STRUCTURE_BLOCK_SWAPPER.set(/natures_spirit:.*coconut.*/, new Map([
        ['minecraft:chest', 'everycomp:abnww/natures_spirit/coconut_chest'],
        ['minecraft:trapped_chest', 'everycomp:abnww/natures_spirit/trapped_coconut_chest']
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set(/natures_spirit:.*adobe.*/, new Map([
        ['minecraft:chest', 'everycomp:abnww/natures_spirit/joshua_chest'],
        ['minecraft:trapped_chest', 'everycomp:abnww/natures_spirit/trapped_joshua_chest']
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set(/natures_spirit:.*cypress.*/, new Map([
        ['minecraft:chest', 'everycomp:abnww/natures_spirit/cypress_chest'],
        ['minecraft:trapped_chest', 'everycomp:abnww/natures_spirit/trapped_cypress_chest']
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set(/natures_spirit:.*wisteria.*/, new Map([
        ['minecraft:chest', 'everycomp:abnww/natures_spirit/wisteria_chest'],
        ['minecraft:trapped_chest', 'everycomp:abnww/natures_spirit/trapped_wisteria_chest']
    ]))

    // The rest of the pink sand blocks should be swapped from structures if needed
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sandstone', 'atmospheric:red_arid_sandstone')
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sand', 'atmospheric:red_arid_sand')
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sandstone_wall', 'atmospheric:red_arid_sandstone_wall')
    global.BLOCK_SWAPPER.set('natures_spirit:smooth_pink_sandstone', 'atmospheric:smooth_red_arid_sandstone')
    global.BLOCK_SWAPPER.set('natures_spirit:cut_pink_sandstone', 'atmospheric:cut_red_arid_sandstone')
}