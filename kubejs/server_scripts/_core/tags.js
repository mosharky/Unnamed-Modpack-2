/** @param {$TagKubeEvent} e */
function itemTags_Core(e) {
    e.removeAllTagsFrom(global.REMOVALS.arr)
    e.add('kubejs:disabled', global.REMOVALS.arr)
}

/** @param {$TagKubeEvent} e */
function blockTags_Core(e) {
    // Bountiful Fares mixins to make fruits able to grow on data-driven leaves
    e.add('yonder:can_hang_on/apple', ['#bountifulfares:apple_leaves'])
    e.add('yonder:can_hang_on/golden_apple', ['#bountifulfares:golden_apple_leaves', '#bountifulfares:flowering_golden_apple_leaves'])
    e.add('yonder:can_hang_on/hoary_apple', ['#bountifulfares:hoary_apple_leaves'])
    e.add('yonder:can_hang_on/lemon', ['#bountifulfares:lemon_leaves'])
    e.add('yonder:can_hang_on/orange', ['#bountifulfares:orange_leaves'])
    e.add('yonder:can_hang_on/plum', ['#bountifulfares:plum_leaves'])
    e.add('yonder:can_hang_on/walnut', ['nomansland:walnut_leaves'])
    e.add('yonder:can_hang_on/withered_golden_apple', ['#bountifulfares:golden_apple_leaves', '#bountifulfares:flowering_golden_apple_leaves'])
}

/** @param {$TagKubeEvent} e */
function entityTags_Core(e) {
}


/** @param {$TagKubeEvent} e */
function biomeTags_Core(e) {
    /*
    e.add('kubejs:classic_soil', e.get('minecraft:is_overworld').getObjectIds())
    e.remove('kubejs:classic_soil', [
        // from https://github.com/Alchemists-Of-Yore/No-Mans-Land/1.21.1/src/main/resources/data/nomansland/tags/worldgen/biome/classic_soil.json
        'minecraft:mushroom_fields',
        'minecraft:frozen_peaks',
        e.get('minecraft:is_ocean').getObjectIds(),
        e.get('minecraft:is_river').getObjectIds(),
        e.get('c:is_desert').getObjectIds(),
        e.get('c:is_cave').getObjectIds(),
        e.get('c:is_badlands').getObjectIds(),
        e.get('minecraft:is_nether').getObjectIds(),
        e.get('minecraft:is_end').getObjectIds(),
        // my filters
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin',
        'natures_spirit:tropical_basin',
        'natures_spirit:tundra',
        'natures_spirit:white_cliffs',
        'natures_spirit:marsh',
        'natures_spirit:wooded_drylands',
        'natures_spirit:red_peaks',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:arid_highlands',
        'minecraft:swamp',
        'minecraft:mangrove_swamp',
        e.get('c:is_mountain/peak').getObjectIds(),
        e.get('kubejs:has_feature/andesite_cliff').getObjectIds(),
        e.get('kubejs:has_feature/granite_cliff').getObjectIds(),
        e.get('kubejs:has_feature/terracotta_cliff').getObjectIds(),
        e.get('kubejs:has_feature/travertine_cliff').getObjectIds(),
        e.get('kubejs:has_feature/kaolin_cliff').getObjectIds(),
        e.get('kubejs:has_feature/chert_cliff').getObjectIds(),
    ])
    */
}


/** @param {$TagKubeEvent} e */
function structureTags_Core(e) {
    e.add('kubejs:all_structures', /.*/)

    e.add('kubejs:minecraft/has_oak_chest', '#kubejs:all_structures')
    e.add('kubejs:minecraft/has_spruce_chest', [
        'minecraft:village_snowy',
        'minecraft:village_taiga',
    ])
    e.add('kubejs:minecraft/has_birch_chest', [])
    e.add('kubejs:minecraft/has_jungle_chest', [
        'minecraft:jungle_pyramid'
    ])
    e.add('kubejs:minecraft/has_acacia_chest', [
        'minecraft:village_savanna'
    ])
    e.add('kubejs:minecraft/has_dark_oak_chest', [
        '#minecraft:pillager_outpost',
        'minecraft:mansion'
    ])
    e.add('kubejs:minecraft/has_mangrove_chest', [])
    e.add('kubejs:minecraft/has_cherry_chest', [])
    e.add('kubejs:minecraft/has_crimson_chest', [
        'minecraft:bastion_remnant',
        /minecraft:ruined_portal.*/,
        'betterfortresses:fortress',
        'minecraft:fortress'
    ])
    e.add('kubejs:minecraft/has_warped_chest', [])
}
