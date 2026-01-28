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
        /natures_spirit:.*pizza/,
        'natures_spirit:cheese_bucket',
    ])

    structureSwapChest('natures_spirit:village_adobe', 'natures_spirit:joshua')
    structureSwapChest('natures_spirit:village_coconut', 'natures_spirit:coconut')
    structureSwapChest('natures_spirit:village_cypress', 'natures_spirit:cypress')
    structureSwapChest('natures_spirit:village_wisteria', 'natures_spirit:wisteria')

    // The rest of the pink sand blocks should be swapped from structures if needed
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sandstone', 'atmospheric:red_arid_sandstone')
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sand', 'atmospheric:red_arid_sand')
    global.BLOCK_SWAPPER.set('natures_spirit:pink_sandstone_wall', 'atmospheric:red_arid_sandstone_wall')
    global.BLOCK_SWAPPER.set('natures_spirit:smooth_pink_sandstone', 'atmospheric:smooth_red_arid_sandstone')
    global.BLOCK_SWAPPER.set('natures_spirit:cut_pink_sandstone', 'atmospheric:cut_red_arid_sandstone')
}