/** @param {$KubeDataGenerator} e  */
function worldgen_NoMansLand(e) {
    // trees
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_old_growth_birch')
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_sunflower_plains')
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_cherry_grove')
    // tagged features
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_beachgrass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_dried_grass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_forest_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_plains_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_icicles_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_oat_grass_tag_features')
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
    removeBiomeModifier(e, 'nomansland:snowy_taiga/change_color')
    removeBiomeModifier(e, 'nomansland:windswept_savanna/change_color')
    removeBiomeModifier(e, 'nomansland:windswept_savanna/remove_features')

    // snowy taiga would have the same effects as grove
    e.json('kubejs:lithostitched/worldgen_modifier/replace_effects/snowy_taiga', {
        type: 'lithostitched:replace_effects',
        biomes: 'minecraft:snowy_taiga',
        effects: {
            fog_color: 15200511,
            foliage_color: 10205860,
            grass_color: 10205860,
            sky_color: 7715315,
            water_color: 4220592,
            water_fog_color: 2771621
        }
    })

    // keep new flowers
    removeBiomeModifier(e, 'nomansland:sunflower_plains/remove_features')
    removeFeatures(e, 'nomansland:flower_patches/flowers_sunflower_plains', 'minecraft:sunflower_plains', VEGETAL_DECORATION)

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

    // Integrating features
    // Crag rocks
    addFeatures(e, registerCommonCragRock(e, 'minecraft:terracotta', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/common_crag_rock/terracotta', LOCAL_MODIFICATIONS)
    addFeatures(e, registerBasicCragRock(e, 'minecraft:andesite', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/andesite', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'minecraft:granite', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/granite', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:travertine', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/travertine', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:kaolin', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/kaolin', RAW_GENERATION)
    addFeatures(e, registerBasicCragRock(e, 'natures_spirit:chert', 'minecraft:dirt', 'minecraft:grass_block'), '#kubejs:has_feature/crag_rock/chert', RAW_GENERATION)
    // Flora
    // lavender biome features
    addFeatures(e, [
        copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:flower_patches/flowers_lavender_field'),
        copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:patch_lavender_bush'),
        copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:patch_lavender_bush_sparse'),
    ], 'natures_spirit:lavender_fields', VEGETAL_DECORATION)


    // replace oak apple trees with NS/vanilla version
    registerFeature(e, PLACED, 'nomansland:fancy_oak_apple_01', {
        feature: 'minecraft:fancy_oak',
        placement: [wouldSurvive('minecraft:oak_sapling')]
    })
    registerFeature(e, PLACED, 'nomansland:fancy_oak_apple_005', {
        feature: 'minecraft:fancy_oak',
        placement: [wouldSurvive('minecraft:oak_sapling')]
    })
    registerFeature(e, PLACED, 'nomansland:oak_apple_01', {
        feature: 'minecraft:oak',
        placement: [wouldSurvive('minecraft:oak_sapling')]
    })
    registerFeature(e, PLACED, 'nomansland:oak_apple_005', {
        feature: 'minecraft:oak',
        placement: [wouldSurvive('minecraft:oak_sapling')]
    })

    // remove maple trees
    registerFeature(e, CONFIGURED, 'nomansland:biome_trees/trees_snowy_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.2, feature: 'minecraft:pine_checked' },
                { chance: 0.2, feature: 'nomansland:pine_checked' },
                { chance: 0.1, feature: 'nomansland:frosted_pine_checked' },
                { chance: 0.05, feature: 'nomansland:frosted_spruce_checked' },
                { chance: 0.05, feature: 'nomansland:frosted_spruce_alt_checked' }
            ]
        }
    })


    // ⚠️ NML changes vanilla configured features. why!!!!!!!!!!
    // remove maple
    registerFeature(e, CONFIGURED, 'minecraft:trees_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.33333334, feature: 'minecraft:pine_checked' },
                { chance: 0.2, feature: 'nomansland:pine_checked' }
            ]
        }
    })

    // revert cherry trees to vanilla shape
    registerFeature(e, CONFIGURED, 'minecraft:cherry_bees_005', {
        type: 'minecraft:tree',
        config: {
            decorators: [
                { type: 'minecraft:beehive', probability: 0.05 }
            ],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:cherry_foliage_placer',
                corner_hole_chance: 0.25,
                hanging_leaves_chance: 0.16666667,
                hanging_leaves_extension_chance: 0.33333334,
                height: 5,
                offset: 0,
                radius: 4,
                wide_bottom_layer_hole_chance: 0.25
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:cherry_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 2
            },
            trunk_placer: {
                type: 'minecraft:cherry_trunk_placer',
                base_height: 7,
                branch_count: {
                    type: 'minecraft:weighted_list',
                    distribution: [
                        { data: 1, weight: 1 },
                        { data: 2, weight: 1 },
                        { data: 3, weight: 1 }
                    ]
                },
                branch_end_offset_from_top: { type: 'minecraft:uniform', max_inclusive: 0, min_inclusive: -1 },
                branch_horizontal_length: { type: 'minecraft:uniform', max_inclusive: 4, min_inclusive: 2 },
                branch_start_offset_from_top: { max_inclusive: -3, min_inclusive: -4 },
                height_rand_a: 1,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:cherry_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:cherry', {
        type: 'minecraft:tree',
        config: {
            decorators: [],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:cherry_foliage_placer',
                corner_hole_chance: 0.25,
                hanging_leaves_chance: 0.16666667,
                hanging_leaves_extension_chance: 0.33333334,
                height: 5,
                offset: 0,
                radius: 4,
                wide_bottom_layer_hole_chance: 0.25
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:cherry_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 2
            },
            trunk_placer: {
                type: 'minecraft:cherry_trunk_placer',
                base_height: 7,
                branch_count: {
                    type: 'minecraft:weighted_list',
                    distribution: [
                        { data: 1, weight: 1 },
                        { data: 2, weight: 1 },
                        { data: 3, weight: 1 }
                    ]
                },
                branch_end_offset_from_top: { type: 'minecraft:uniform', max_inclusive: 0, min_inclusive: -1 },
                branch_horizontal_length: { type: 'minecraft:uniform', max_inclusive: 4, min_inclusive: 2 },
                branch_start_offset_from_top: { max_inclusive: -3, min_inclusive: -4 },
                height_rand_a: 1,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:cherry_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })

    // remove fruit leaves decorator from oak trees
    registerFeature(e, CONFIGURED, 'minecraft:oak_bees_002', {
        type: 'minecraft:tree',
        config: {
            decorators: [
                { type: 'minecraft:beehive', probability: 0.02 },
            ],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:blob_foliage_placer',
                height: 3,
                offset: 0,
                radius: 2
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 1
            },
            trunk_placer: {
                type: 'minecraft:straight_trunk_placer',
                base_height: 5,
                height_rand_a: 2,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:oak_bees_0002', {
        type: 'minecraft:tree',
        config: {
            decorators: [
                { type: 'minecraft:beehive', probability: 0.002 },
            ],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:blob_foliage_placer',
                height: 3,
                offset: 0,
                radius: 2
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 1
            },
            trunk_placer: {
                type: 'minecraft:straight_trunk_placer',
                base_height: 5,
                height_rand_a: 2,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:oak_bees_005', {
        type: 'minecraft:tree',
        config: {
            decorators: [
                { type: 'minecraft:beehive', probability: 0.05 },
            ],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:blob_foliage_placer',
                height: 3,
                offset: 0,
                radius: 2
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 1
            },
            trunk_placer: {
                type: 'minecraft:straight_trunk_placer',
                base_height: 5,
                height_rand_a: 2,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:oak', {
        type: 'minecraft:tree',
        config: {
            decorators: [],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'minecraft:blob_foliage_placer',
                height: 3,
                offset: 0,
                radius: 2
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_leaves',
                    Properties: {
                        distance: '7',
                        persistent: 'false',
                        waterlogged: 'false'
                    }
                }
            },
            force_dirt: false,
            ignore_vines: true,
            minimum_size: {
                type: 'minecraft:two_layers_feature_size',
                limit: 1,
                lower_size: 0,
                upper_size: 1
            },
            trunk_placer: {
                type: 'minecraft:straight_trunk_placer',
                base_height: 5,
                height_rand_a: 2,
                height_rand_b: 0
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'minecraft:oak_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    })

    // add frosty fir trees to groves
    registerFeature(e, CONFIGURED, 'minecraft:trees_grove', {
        type: 'minecraft:random_selector',
        config: {
            default: 'nomansland:frosted_spruce_checked',
            features: [
                { chance: 0.33, feature: 'nomansland:frosted_spruce_alt_checked' },
                { chance: 0.1, feature: 'natures_spirit:frosty_fir_checked' }
            ]
        }
    })
}