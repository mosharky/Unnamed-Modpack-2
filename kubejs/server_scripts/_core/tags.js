/** @param {$TagKubeEvent} e */
function itemTags_Core(e) {
    e.removeAllTagsFrom(global.REMOVALS.getAsArray())
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

    e.add('kubejs:has_feature/sparse_maple_tree', [
        'minecraft:forest',
        'minecraft:windswept_forest',
        'minecraft:flower_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/orange', [
        'minecraft:dark_forest',
        'windswept:chestnut_forest',
        'windswept:snowy_chestnut_forest'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/red', [
        'minecraft:taiga',
        'minecraft:windswept_forest',
        'windswept:pine_barrens',
        'windswept:snowy_pine_barrens'
    ])
    e.add('kubejs:has_feature/spotted_maple_tree/yellow', [
        'minecraft:forest'
    ])
    e.add('kubejs:has_feature/stone_cliff', [
        'natures_spirit:blooming_sugi_forest',
        'natures_spirit:boreal_taiga',
        'natures_spirit:fir_forest',
        'natures_spirit:oak_savanna',
        'natures_spirit:snowy_fir_forest',
        'natures_spirit:sugi_forest',
        'natures_spirit:tundra',
        'natures_spirit:windswept_sugi_forest',
        'minecraft:cherry_grove',
        'minecraft:grove',
        'minecraft:meadow',
        'minecraft:snowy_slopes',
        'minecraft:windswept_forest',
        'minecraft:windswept_gravelly_hills',
        'minecraft:windswept_hills',
    ])
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
}