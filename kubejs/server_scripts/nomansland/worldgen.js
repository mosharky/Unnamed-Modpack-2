/** @param {$KubeDataGenerator} e  */
function worldgen_NoMansLand(e) {
    // trees
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_old_growth_birch')
    // tagged features
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_beachgrass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_dried_grass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_forest_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_plains_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_icicles_tag_features')
    // spawns
    removeBiomeModifier(e, 'nomansland:spawns/deer/spawn_deer_forest')
    removeBiomeModifier(e, 'nomansland:spawns/deer/spawn_deer_taiga')
    // misc
    removeBiomeModifier(e, 'nomansland:add_patch_barrel_cactus_normal')
    removeBiomeModifier(e, 'nomansland:add_patch_grass_snowy')
    removeBiomeModifier(e, 'nomansland:add_has_cactus_tag_features')
    removeBiomeModifier(e, 'nomansland:add_patch_hearty_succulent')
    removeBiomeModifier(e, 'nomansland:add_patch_succulent_normal')
    removeBiomeModifier(e, 'nomansland:add_patch_dried_grass_mycelium')
    // vanilla biome changes
    removeBiomeModifier(e, 'nomansland:birch_forest/change_color')
    removeBiomeModifier(e, 'nomansland:birch_forest/remove_features')
    removeBiomeModifier(e, 'nomansland:old_growth_birch_forest/change_color')
    removeBiomeModifier(e, 'nomansland:old_growth_birch_forest/remove_features')
    removeBiomeModifier(e, 'nomansland:bamboo_jungle/change_color')
    removeBiomeModifier(e, 'nomansland:jungle/change_color')
    removeBiomeModifier(e, 'nomansland:sparse_jungle/change_color')
    removeBiomeModifier(e, 'nomansland:savanna/change_color')
    removeBiomeModifier(e, 'nomansland:savanna/remove_features')
    removeBiomeModifier(e, 'nomansland:savanna_plateau/change_color')
    removeBiomeModifier(e, 'nomansland:savanna_plateau/remove_features')
    removeBiomeModifier(e, 'nomansland:windswept_savanna/change_color')
    removeBiomeModifier(e, 'nomansland:windswept_savanna/remove_features')

    // Pine replacement
    const pine = getFeatureJson('environmental', CONFIGURED, 'environmental:pine')
    const tall_pine = getFeatureJson('environmental', CONFIGURED, 'environmental:tall_pine')
    registerFeature(e, CONFIGURED, 'nomansland:baby_pine', pine)
    registerFeature(e, CONFIGURED, 'nomansland:frosted_pine', pine)
    registerFeature(e, CONFIGURED, 'nomansland:large_frosted_pine', tall_pine)
    registerFeature(e, CONFIGURED, 'nomansland:large_pine', tall_pine)
    registerFeature(e, CONFIGURED, 'nomansland:pine', pine)

    // Willow replacement
    const willow_tree = getFeatureJson('natures_spirit', CONFIGURED, 'natures_spirit:willow_tree')
    registerFeature(e, CONFIGURED, 'nomansland:small_willow', willow_tree)
    registerFeature(e, CONFIGURED, 'nomansland:willow', willow_tree)
    registerFeature(e, CONFIGURED, 'nomansland:towering_willow', willow_tree)
    registerFeature(e, CONFIGURED, 'nomansland:towering_willow_moss', willow_tree)

    // Bountiful Fares walnuts on NML walnut trees
    const small_walnut_prototype = getFeatureJson('nomansland', CONFIGURED, 'nomansland:small_walnut_prototype')
    small_walnut_prototype.config.decorators.push({ type: 'minecraft:beehive', probability: 0.005 })  // making it match nomansland:small_walnut
    const walnut = getFeatureJson('nomansland', CONFIGURED, 'nomansland:walnut')
    // Adding the walnuts
    const walnutTrees = [small_walnut_prototype, walnut].forEach(tree => {
        tree.config.decorators.push({
            type: 'minecraft:attached_to_leaves',
            block_provider: {
                type: 'minecraft:randomized_int_state_provider',
                property: 'age',
                source: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'bountifulfares:hanging_walnuts',
                        Properties: { age: '0' }
                    }
                },
                values: {
                    type: 'minecraft:uniform',
                    max_inclusive: 1,
                    min_inclusive: 0
                }
            },
            directions: ['down'],
            exclusion_radius_xz: 1,
            exclusion_radius_y: 0,
            probability: 0.075,
            required_empty_blocks: 1
        })
    })
    registerFeature(e, CONFIGURED, 'nomansland:small_walnut_prototype', small_walnut_prototype)
    registerFeature(e, CONFIGURED, 'nomansland:small_walnut', small_walnut_prototype)
    registerFeature(e, CONFIGURED, 'nomansland:walnut', walnut)

    // Crag rocks
    addFeatures(e, registerCommonCragRock(e, 'minecraft:terracotta', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/common_crag_rock/terracotta', LOCAL_MODIFICATIONS)
    addFeatures(e, registerBasicCragRock(e, 'minecraft:andesite', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/andesite', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'minecraft:granite', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/granite', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:travertine', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/travertine', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:kaolin', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/kaolin', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:chert', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/chert', RAW_GENERATION)
}