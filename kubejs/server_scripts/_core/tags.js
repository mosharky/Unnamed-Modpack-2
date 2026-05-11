/** @param {$TagKubeEvent} e */
function itemTags_Core(e) {
    e.removeAllTagsFrom(global.REMOVALS.arr)
    e.add('kubejs:disabled', global.REMOVALS.arr)
}

/** @param {$TagKubeEvent} e */
function blockTags_Core(e) {
    e.add('snowrealmagic:containables', [
        // /geocluster:.*sample/
    ])

    // used for Panda's Falling Trees compat
    e.add('kubejs:extra_tree_blocks_whitelist', [
        /natures_spirit:.*wisteria_vines/
    ])

    /*
    e.add('generikb:magnetic_caves_blocks', [
        'alexscaves:azure_neodymium_pillar',
        'alexscaves:scarlet_neodymium_pillar',
        'alexscaves:azure_neodymium_node',
        'alexscaves:scarlet_neodymium_node',
        'alexscaves:galena',
        'alexscaves:galena_iron_ore',
        'alexscaves:energized_galena_azure',
        'alexscaves:energized_galena_scarlet',
        'alexscaves:energized_galena_neutral',
        'alexscaves:metal_swarf',
        'alexscaves:galena_spire',
        'alexscaves:tesla_bulb',
        'create_new_age:magnetite_block',
        'minecraft:bedrock',
        'minecraft:lava'
    ])
    e.add('generikb:toxic_caves_blocks', [
        'alexscaves:radrock',
        'alexscaves:acidic_radrock',
        'alexscaves:radrock_uranium_ore',
        'alexscaves:underweed',
        'alexscaves:sulfur',
        'alexscaves:sulfur_bud_small',
        'alexscaves:sulfur_bud_medium',
        'alexscaves:sulfur_bud_large',
        'alexscaves:sulfur_cluster',
        'alexscaves:acid',
        'minecraft:bedrock',
        'minecraft:mud'
    ])
    */

    // Bountiful Fares mixins to make fruits able to grow on data-driven leaves
    // e.add('nameless:can_hang_on/hoary_apple', [])
    e.add('nameless:can_hang_on/walnut', 'nomansland:walnut_leaves')
}

/** @param {$TagKubeEvent} e */
function entityTags_Core(e) {
    // e.add('kubejs:surface_mod_entities', /.*surface:.*/)
    e.add('c:bosses', [
        'alexscaves:tremorzilla',
        'alexscaves:hullbreaker',
        'alexscaves:luxtructosaurus',
        'alexscaves:gum_worm',
        'alexscaves:forsaken',
        'alexsmobs:void_worm',
    ])
}


/** @param {$TagKubeEvent} e */
function biomeTags_Core(e) {
    e.add('c:is_sandy', [
        '#atmospheric:is_dunes',
        '#natures_spirit:is_adobe',
        'natures_spirit:scorched_dunes'
    ])
    e.add('c:is_dry/overworld', [
        '#atmospheric:is_dunes',
        'natures_spirit:scorched_dunes'
    ])
    e.add('c:is_coniferous', [
        '#natures_spirit:is_alpine',
        'natures_spirit:heather_fields',
        'natures_spirit:fir_forest',
        'natures_spirit:snowy_fir_forest',
        'natures_spirit:boreal_taiga',
    ])

    e.add('kubejs:has_feature/stone_cliff', '#kubejs:classic_soil')
    e.add('kubejs:has_feature/terracotta_cliff', [
        'natures_spirit:bamboo_wetlands',
        'minecraft:bamboo_jungle',
        'minecraft:jungle',
        'minecraft:sparse_jungle',
    ])
    e.add('kubejs:has_feature/andesite_cliff', [
        '#natures_spirit:is_alpine',
        'natures_spirit:heather_fields',
        'natures_spirit:prairie',
        '#windswept:is_pine_barrens',
    ])
    e.add('kubejs:has_feature/granite_cliff', [
        'natures_spirit:golden_wilds',
        'natures_spirit:maple_woodlands',
        'natures_spirit:marigold_meadows',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
        'windswept:chestnut_forest',
    ])

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

    // Vanilla Backport
    e.add('minecraft:spawns_wildflowers', [
        '#natures_spirit:is_autumn'
    ])
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