/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function worldgen_Core(e) {
    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite',
        256, -2, 2, -8, 0,
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone", "minecraft:coarse_dirt", "minecraft:andesite"],
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone", "minecraft:coarse_dirt", "minecraft:andesite"]
    ), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite',
        256, -2, 2, -16, 0,
        ["minecraft:grass_block", "minecraft:stone", "minecraft:dirt", "minecraft:rooted_dirt", "minecraft:granite"],
        ["minecraft:grass_block", "minecraft:stone", "minecraft:dirt", "minecraft:rooted_dirt", "minecraft:granite"]
    ), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone',
        256, -2, 2, -8, 0,
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone"],
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:snow_block", "minecraft:stone", "minecraft:gravel", "minecraft:dirt"]
    ), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta',
        96, -2, 2, -6, 0,
        ["minecraft:grass_block", "minecraft:dirt", "minecraft:stone", "minecraft:terracotta"],
        ["minecraft:grass_block", "minecraft:dirt", "minecraft:stone", "minecraft:terracotta"]
    ), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)

    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
        'minecraft:ore_diorite_upper',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)
}
