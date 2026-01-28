function removals_Core() {
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        if (woodType == 'oak') continue  // special case for oak chest in worldgen_Core
        structureSwapChest(`#kubejs:minecraft/has_${woodType}_chest`, 'minecraft:' + woodType)
    }

    global.REMOVALS.add([
        'minecraft:short_dry_grass',
        'minecraft:tall_dry_grass',
        'minecraft:leaf_litter',
    ])
}