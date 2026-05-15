/** @param {import('@package/dev/latvian/mods/kubejs/generator').$KubeDataGenerator} e  */
function worldgen_Core(e) {
    // e.getRegistries().access().lookupOrThrow('neoforge:biome_modifier').listElementIds().toArray().forEach(element => {
        // const modifier = element.location().toString()
        // console.log(modifier)
    // })

    const biomeModifiersToRemove = [
        'abundant_atmosphere:add_flowers_cherry_bushbuds',
        'abundant_atmosphere:add_flowers_midnight_lily',
        'abundant_atmosphere:add_flowers_saffron_bushbuds',
        'abundant_atmosphere:add_flowers_umbra_bushbuds',
        'abundant_atmosphere:add_patch_catsbane',
        'abundant_atmosphere:add_patch_cave_crud',
        'abundant_atmosphere:add_patch_leaf_pile',
        'abundant_atmosphere:add_patch_puffball',
        'abundant_atmosphere:add_patch_rust_moss',
        'abundant_atmosphere:add_trees_eroded_jungle_nml',
        'abundant_atmosphere:remove_ashroot',
        'abundant_atmosphere:remove_patch_rust_moss',
        'almostunified:worldgen',
        'atmospheric:add_feature/wooded_badlands_vegetation',
        'atmospheric:add_feature/yucca_tree_desert',
        'atmospheric:add_feature/yucca_tree_windswept_savanna',
        'autumnity:add_feature/maple_tree',
        'autumnity:add_feature/orange_spotted_maple_tree',
        'autumnity:add_feature/red_spotted_maple_tree',
        'autumnity:add_spawn/snail',
        'autumnity:add_spawn/turkey',
        'autumnity:remove_spawn/chicken',
        'balm:balm',
        'bountifulfares:apple_placed',
        'bountifulfares:chamomile_placed',
        'bountifulfares:honeysuckle_placed',
        'bountifulfares:large_wild_beetroot_placed',
        'bountifulfares:large_wild_carrots_placed',
        'bountifulfares:large_wild_leeks_placed',
        'bountifulfares:large_wild_maize_placed',
        'bountifulfares:large_wild_potatoes_placed',
        'bountifulfares:large_wild_wheat_placed',
        'bountifulfares:lemon_placed',
        'bountifulfares:orange_placed',
        'bountifulfares:palm_placed',
        'bountifulfares:patch_grassy_dirt',
        'bountifulfares:plum_placed',
        'bountifulfares:tea_shrub_placed',
        'bountifulfares:violet_bellflower_placed',
        'bountifulfares:walnut_placed',
        'bountifulfares:wild_beetroot_placed',
        'bountifulfares:wild_carrots_placed',
        'bountifulfares:wild_elderberries_placed',
        'bountifulfares:wild_leeks_placed',
        'bountifulfares:wild_maize_placed',
        'bountifulfares:wild_passion_fruit_placed',
        'bountifulfares:wild_potatoes_placed',
        'bountifulfares:wild_wheat_placed',
        'buzzier_bees:add_feature/add_animal/moobloom',
        'buzzier_bees:add_feature/add_feature/buttercup',
        'buzzier_bees:add_feature/add_feature/pink_clover',
        'buzzier_bees:add_feature/add_feature/white_clover',
        'buzzier_bees:add_feature/remove_spawn/remove_animal/cow',
        'caverns_and_chasms:add_feature/base_ores',
        'caverns_and_chasms:add_feature/cave_growths',
        'caverns_and_chasms:add_feature/extra_silver_ore',
        'caverns_and_chasms:add_feature/false_hope',
        'caverns_and_chasms:add_feature/fragile_stone',
        'caverns_and_chasms:add_feature/gold_ore',
        'caverns_and_chasms:add_feature/rhyolite',
        'caverns_and_chasms:add_feature/rocky_dirt',
        'caverns_and_chasms:add_feature/schist',
        'caverns_and_chasms:add_feature/silver_ore',
        'caverns_and_chasms:add_feature/soul_silver_ore',
        'caverns_and_chasms:add_feature/spinel_ore',
        'caverns_and_chasms:add_feature/tin_ore',
        'caverns_and_chasms:add_spawn/cavefish',
        'caverns_and_chasms:add_spawn/glare',
        'caverns_and_chasms:add_spawn/grazer',
        'caverns_and_chasms:add_spawn/lost_goat',
        'caverns_and_chasms:add_spawn/mime',
        'caverns_and_chasms:add_spawn/peeper',
        'caverns_and_chasms:add_spawn/rat',
        'caverns_and_chasms:remove_feature/dirt_ore',
        'caverns_and_chasms:remove_feature/gold_ore',
        'create:striated_ores_nether',
        'create:striated_ores_overworld',
        'create:zinc_ore',
        'darkerdepths:add_glowshroom_forest_spawns',
        'darkerdepths:add_glowshroom_forest_underground_decoration',
        'darkerdepths:add_glowshroom_forest_vegetal_features',
        'darkerdepths:add_molten_cavern_local_modifications',
        'darkerdepths:add_molten_cavern_raw_generation',
        'darkerdepths:add_molten_cavern_top_layer_modifications',
        'darkerdepths:add_molten_cavern_vegetal_features',
        'darkerdepths:add_molten_caverns_ores',
        'darkerdepths:add_sandy_catacombs_local_modifications',
        'darkerdepths:add_sandy_catacombs_raw_generation',
        'darkerdepths:add_sandy_catacombs_spawns',
        'darkerdepths:add_sandy_catacombs_underground_decoration',
        'darkerdepths:add_sandy_catacombs_vegetal_features',
        'environmental:add_feature/bird_of_paradise',
        'environmental:add_feature/bluebell',
        'environmental:add_feature/cartwheel',
        'environmental:add_feature/cattails',
        'environmental:add_feature/cup_lichen',
        'environmental:add_feature/dwarf_spruce_sparse',
        'environmental:add_feature/flower_forest_vegetation',
        'environmental:add_feature/hibiscus_bush',
        'environmental:add_feature/jungle_vegetation',
        'environmental:add_feature/mud_disk',
        'environmental:add_feature/mycelium_sprouts',
        'environmental:add_feature/plains_vegetation',
        'environmental:add_feature/savanna_vegetation',
        'environmental:add_feature/swamp_vegetation',
        'environmental:add_feature/tasselflower',
        'environmental:add_feature/violet',
        'environmental:add_feature/zebra_dazzle',
        'environmental:add_spawn/deer_meadow',
        'environmental:add_spawn/deer',
        'environmental:add_spawn/duck_rare',
        'environmental:add_spawn/duck',
        'environmental:add_spawn/pig',
        'environmental:add_spawn/reindeer',
        'environmental:add_spawn/slabfish',
        'environmental:add_spawn/tapir_rare',
        'environmental:add_spawn/tapir',
        'environmental:add_spawn/yak',
        'environmental:remove_feature/swamp_oak',
        'environmental:remove_spawn/chicken',
        'environmental:remove_spawn/cow',
        'environmental:remove_spawn/pig',
        'environmental:remove_spawn/sheep',
        'fabric_biome_api_v1:fabric_biome_modifier_instance',
        'farmersdelight:brown_mushroom_colony',
        'farmersdelight:red_mushroom_colony',
        'farmersdelight:wild_beetroots',
        'farmersdelight:wild_cabbages',
        'farmersdelight:wild_carrots',
        'farmersdelight:wild_onions',
        'farmersdelight:wild_potatoes',
        'farmersdelight:wild_rice',
        'farmersdelight:wild_tomatoes',
        'incubation:add_feature/chicken_nest',
        'incubation:add_feature/duck_nest',
        'incubation:add_feature/turkey_nest',
        'neapolitan:add_feature/adzuki_sprouts',
        'neapolitan:add_feature/banana_plant/common',
        'neapolitan:add_feature/banana_plant/rare',
        'neapolitan:add_feature/banana_plant/uncommon',
        'neapolitan:add_feature/mint_pond',
        'neapolitan:add_feature/strawberry_bush',
        'neapolitan:add_feature/vanilla_vine',
        'nomansland:add_biome_trees/trees_cherry_grove',
        'nomansland:add_biome_trees/trees_forest_noise',
        'nomansland:add_biome_trees/trees_old_growth_birch',
        'nomansland:add_biome_trees/trees_snowy_taiga',
        'nomansland:add_biome_trees/trees_sunflower_plains',
        'nomansland:add_brown_mushroom_normal',
        'nomansland:add_brown_mushroom_old_growth',
        'nomansland:add_clover_patch_meadow',
        'nomansland:add_crag_rock_mycelium',
        'nomansland:add_crag_rock',
        'nomansland:add_feature_addition/has_beachgrass_tag_features',
        'nomansland:add_feature_addition/has_cave_weeds_tag_features',
        'nomansland:add_feature_addition/has_clovers_tag_features',
        'nomansland:add_feature_addition/has_dried_grass_tag_features',
        'nomansland:add_feature_addition/has_fallen_trees_dry_tag_features',
        'nomansland:add_feature_addition/has_fallen_trees_forest_tag_features',
        'nomansland:add_feature_addition/has_fallen_trees_jungle_tag_features',
        'nomansland:add_feature_addition/has_fallen_trees_snowy_tag_features',
        'nomansland:add_feature_addition/has_fallen_trees_sparse_tag_features',
        'nomansland:add_feature_addition/has_fern_patch_tag_features',
        'nomansland:add_feature_addition/has_fiddlehead_tag_features',
        'nomansland:add_feature_addition/has_field_mushroom_circle_tag_features',
        'nomansland:add_feature_addition/has_field_mushroom_tag_features',
        'nomansland:add_feature_addition/has_forest_rock_tag_features',
        'nomansland:add_feature_addition/has_frosted_grass_forest_tag_features',
        'nomansland:add_feature_addition/has_frosted_grass_plains_tag_features',
        'nomansland:add_feature_addition/has_ground_ivy_tag_features',
        'nomansland:add_feature_addition/has_icicles_tag_features',
        'nomansland:add_feature_addition/has_mud_patch_tag_features',
        'nomansland:add_feature_addition/has_nether_quartzite_geode_tag_features',
        'nomansland:add_feature_addition/has_oat_grass_tag_features',
        'nomansland:add_feature_addition/has_overworld_foliage_tag_features',
        'nomansland:add_feature_addition/has_pebbles_tag_features',
        'nomansland:add_feature_addition/has_pond_common_snowy_tag_features',
        'nomansland:add_feature_addition/has_pond_common_tag_features',
        'nomansland:add_feature_addition/has_pond_swamp_tag_features',
        'nomansland:add_feature_addition/has_quartzite_geode_tag_features',
        'nomansland:add_feature_addition/has_rafflesia_tag_features',
        'nomansland:add_feature_addition/has_regular_tortoise_burrows_tag_features',
        'nomansland:add_feature_addition/has_shelf_mushroom_forest_tag_features',
        'nomansland:add_feature_addition/has_shelf_mushroom_old_growth_tag_features',
        'nomansland:add_feature_addition/has_shelf_mushroom_taiga_tag_features',
        'nomansland:add_feature_addition/has_stone_boulder_tag_features',
        'nomansland:add_feature_addition/has_swamp_foliage_tag_features',
        'nomansland:add_field_mushroom_circle_meadow',
        'nomansland:add_flower_patches/flowerbed_flower_forest',
        'nomansland:add_flower_patches/flowerbed_frosted',
        'nomansland:add_flower_patches/flowerbed_jungle',
        'nomansland:add_flower_patches/flowerbed_red',
        'nomansland:add_flower_patches/flowerbed_savanna',
        'nomansland:add_flower_patches/flowerbed_taiga',
        'nomansland:add_flower_patches/flowerbed_white_and_violet',
        'nomansland:add_flower_patches/flowerbed_white_and_yellow',
        'nomansland:add_flower_patches/flowerbed_white',
        'nomansland:add_flower_patches/flowerbed_yellow',
        'nomansland:add_flower_patches/flowers_birch_forest',
        'nomansland:add_flower_patches/flowers_cherry',
        'nomansland:add_flower_patches/flowers_flower_forest',
        'nomansland:add_flower_patches/flowers_forest',
        'nomansland:add_flower_patches/flowers_frosted',
        'nomansland:add_flower_patches/flowers_maple',
        'nomansland:add_flower_patches/flowers_old_growth_birch',
        'nomansland:add_flower_patches/flowers_plains',
        'nomansland:add_flower_patches/flowers_savanna',
        'nomansland:add_flower_patches/flowers_sunflower_plains',
        'nomansland:add_flower_patches/flowers_taiga',
        'nomansland:add_flower_patches/flowers_white',
        'nomansland:add_flower_patches/flowers_windswept',
        'nomansland:add_flower_warm',
        'nomansland:add_has_cactus_tag_features',
        'nomansland:add_has_gravel_shore_tag_features',
        'nomansland:add_is_cragland_tag_features',
        'nomansland:add_is_oceanic_cragland_tag_features',
        'nomansland:add_is_shoreline_tag_features',
        'nomansland:add_patch_barrel_cactus_normal',
        'nomansland:add_patch_berry_common',
        'nomansland:add_patch_dead_bush',
        'nomansland:add_patch_dried_grass_mycelium',
        'nomansland:add_patch_duckweed_sparse',
        'nomansland:add_patch_field_mushroom_extra',
        'nomansland:add_patch_grass_normal',
        'nomansland:add_patch_grass_savanna',
        'nomansland:add_patch_grass_snowy',
        'nomansland:add_patch_hearty_succulent',
        'nomansland:add_patch_large_fern',
        'nomansland:add_patch_mycelium_growths',
        'nomansland:add_patch_peony_and_lilac',
        'nomansland:add_patch_peony',
        'nomansland:add_patch_pumpkin',
        'nomansland:add_patch_rose_bush',
        'nomansland:add_patch_succulent_normal',
        'nomansland:add_patch_sugar_cane',
        'nomansland:add_patch_tall_grass',
        'nomansland:add_patch_water_mosaic',
        'nomansland:add_patch_waterlily',
        'nomansland:add_pond_stony_shore',
        'nomansland:add_red_mushroom_normal',
        'nomansland:add_shelf_mushroom_dark_forest',
        'nomansland:add_trees_water',
        'nomansland:add_tuff_boulder',
        'nomansland:add_underground/ore_silt',
        'nomansland:add_underground/patch_duckweed_lush_caves',
        'nomansland:add_underground/tortoise_burrows/tortoise_burrow_lush',
        'nomansland:badlands/add_spawns',
        'nomansland:badlands/change_color',
        'nomansland:badlands/remove_spawns',
        'nomansland:bamboo_jungle/add_spawns',
        'nomansland:bamboo_jungle/change_color',
        'nomansland:bamboo_jungle/change_music',
        'nomansland:bamboo_jungle/change_spawns',
        'nomansland:bamboo_jungle/remove_features',
        'nomansland:bamboo_jungle/remove_spawns',
        'nomansland:beach/change_color',
        'nomansland:beach/remove_features',
        'nomansland:birch_forest/add_spawns',
        'nomansland:birch_forest/change_color',
        'nomansland:birch_forest/change_spawns',
        'nomansland:birch_forest/remove_features',
        'nomansland:cherry_grove/add_spawns',
        'nomansland:cherry_grove/change_color',
        'nomansland:cherry_grove/change_spawns',
        'nomansland:cherry_grove/remove_features',
        'nomansland:cold_ocean/change_color',
        'nomansland:cold_ocean/remove_features',
        'nomansland:dark_forest/add_spawns',
        'nomansland:dark_forest/change_color',
        'nomansland:dark_forest/change_spawns',
        'nomansland:dark_forest/remove_features',
        'nomansland:dark_forest/remove_spawns',
        'nomansland:deep_cold_ocean/change_color',
        'nomansland:deep_cold_ocean/remove_features',
        'nomansland:deep_dark/change_color',
        'nomansland:deep_dark/change_particle',
        'nomansland:deep_frozen_ocean/change_color',
        'nomansland:deep_frozen_ocean/remove_features',
        'nomansland:deep_lukewarm_ocean/change_color',
        'nomansland:deep_lukewarm_ocean/remove_features',
        'nomansland:deep_ocean/change_color',
        'nomansland:deep_ocean/remove_features',
        'nomansland:desert/add_spawns',
        'nomansland:desert/change_color',
        'nomansland:desert/change_spawns',
        'nomansland:desert/remove_features',
        'nomansland:desert/remove_spawns',
        'nomansland:dripstone_caves/change_color',
        'nomansland:dripstone_caves/change_particle',
        'nomansland:eroded_badlands/add_spawns',
        'nomansland:eroded_badlands/change_color',
        'nomansland:eroded_badlands/change_spawns',
        'nomansland:eroded_badlands/remove_spawns',
        'nomansland:flower_forest/add_spawns',
        'nomansland:flower_forest/change_color',
        'nomansland:flower_forest/change_spawns',
        'nomansland:flower_forest/remove_features',
        'nomansland:forest/add_spawns',
        'nomansland:forest/change_color',
        'nomansland:forest/change_spawns',
        'nomansland:forest/remove_features',
        'nomansland:frozen_ocean/change_color',
        'nomansland:frozen_ocean/remove_features',
        'nomansland:frozen_peaks/add_spawns',
        'nomansland:frozen_peaks/change_color',
        'nomansland:frozen_river/add_spawns',
        'nomansland:frozen_river/change_color',
        'nomansland:frozen_river/remove_features',
        'nomansland:grove/add_spawns',
        'nomansland:grove/change_color',
        'nomansland:grove/change_spawns',
        'nomansland:grove/remove_features',
        'nomansland:ice_spikes/change_color',
        'nomansland:ice_spikes/change_spawns',
        'nomansland:ice_spikes/remove_features',
        'nomansland:integration/field_mushroom_colony_patch',
        'nomansland:jagged_peaks/change_color',
        'nomansland:jungle/add_spawns',
        'nomansland:jungle/change_color',
        'nomansland:jungle/change_spawns',
        'nomansland:jungle/remove_features',
        'nomansland:jungle/remove_spawns',
        'nomansland:lukewarm_ocean/change_color',
        'nomansland:lukewarm_ocean/remove_features',
        'nomansland:lush_caves/change_color',
        'nomansland:mangrove_swamp/change_color',
        'nomansland:meadow/change_color',
        'nomansland:meadow/change_spawns',
        'nomansland:mushroom_fields/add_spawns',
        'nomansland:mushroom_fields/change_color',
        'nomansland:mushroom_fields/remove_features',
        'nomansland:ocean/change_color',
        'nomansland:ocean/remove_features',
        'nomansland:old_growth_birch_forest/add_spawns',
        'nomansland:old_growth_birch_forest/change_color',
        'nomansland:old_growth_birch_forest/change_spawns',
        'nomansland:old_growth_birch_forest/remove_features',
        'nomansland:old_growth_pine_taiga/change_color',
        'nomansland:old_growth_pine_taiga/change_spawns',
        'nomansland:old_growth_pine_taiga/remove_features',
        'nomansland:old_growth_pine_taiga/remove_spawns',
        'nomansland:old_growth_spruce_taiga/change_color',
        'nomansland:old_growth_spruce_taiga/change_spawns',
        'nomansland:old_growth_spruce_taiga/remove_features',
        'nomansland:old_growth_spruce_taiga/remove_spawns',
        'nomansland:plains/add_spawns',
        'nomansland:plains/change_color',
        'nomansland:plains/change_spawns',
        'nomansland:plains/remove_features',
        'nomansland:plains/remove_spawns',
        'nomansland:remove_cattail',
        'nomansland:remove_everywhere',
        'nomansland:remove_from_snowy',
        'nomansland:remove_grass_sprouts',
        'nomansland:remove_lava_surface',
        'nomansland:remove_ponds',
        'nomansland:remove_waterlily',
        'nomansland:replace_structures',
        'nomansland:river/change_color',
        'nomansland:river/remove_features',
        'nomansland:savanna_plateau/change_color',
        'nomansland:savanna_plateau/change_spawns',
        'nomansland:savanna_plateau/remove_features',
        'nomansland:savanna_plateau/remove_spawns',
        'nomansland:savanna/add_spawns',
        'nomansland:savanna/change_color',
        'nomansland:savanna/change_spawns',
        'nomansland:savanna/remove_features',
        'nomansland:snowy_beach/change_color',
        'nomansland:snowy_beach/remove_features',
        'nomansland:snowy_plains/change_color',
        'nomansland:snowy_plains/remove_features',
        'nomansland:snowy_slopes/change_color',
        'nomansland:snowy_taiga/add_spawns',
        'nomansland:snowy_taiga/change_color',
        'nomansland:snowy_taiga/change_music',
        'nomansland:snowy_taiga/change_spawns',
        'nomansland:snowy_taiga/remove_features',
        'nomansland:snowy_taiga/remove_spawns',
        'nomansland:sparse_jungle/add_spawns',
        'nomansland:sparse_jungle/change_color',
        'nomansland:sparse_jungle/change_music',
        'nomansland:sparse_jungle/change_spawns',
        'nomansland:sparse_jungle/remove_features',
        'nomansland:sparse_jungle/remove_spawns',
        'nomansland:spawns/add_spawns_to_swamps',
        'nomansland:spawns/deer/spawn_deer_forest',
        'nomansland:spawns/deer/spawn_deer_taiga',
        'nomansland:spawns/goose/spawn_goose_river',
        'nomansland:spawns/goose/spawn_goose_swamp',
        'nomansland:spawns/tortoise/spawn_tortoise_common',
        'nomansland:spawns/tortoise/spawn_tortoise_rare',
        'nomansland:stony_peaks/add_spawns',
        'nomansland:stony_peaks/change_color',
        'nomansland:stony_shore/add_spawns',
        'nomansland:stony_shore/change_color',
        'nomansland:stony_shore/remove_features',
        'nomansland:sunflower_plains/add_spawns',
        'nomansland:sunflower_plains/change_color',
        'nomansland:sunflower_plains/change_spawns',
        'nomansland:sunflower_plains/remove_features',
        'nomansland:sunflower_plains/remove_spawns',
        'nomansland:swamp/change_color',
        'nomansland:swamp/change_spawns',
        'nomansland:swamp/remove_features',
        'nomansland:taiga/change_color',
        'nomansland:taiga/change_music',
        'nomansland:taiga/change_spawns',
        'nomansland:taiga/remove_features',
        'nomansland:taiga/remove_spawns',
        'nomansland:warm_ocean/change_color',
        'nomansland:warm_ocean/remove_features',
        'nomansland:windswept_forest/add_spawns',
        'nomansland:windswept_forest/change_color',
        'nomansland:windswept_forest/change_music',
        'nomansland:windswept_forest/change_spawns',
        'nomansland:windswept_forest/remove_features',
        'nomansland:windswept_gravelly_hills/add_spawns',
        'nomansland:windswept_gravelly_hills/change_color',
        'nomansland:windswept_gravelly_hills/change_music',
        'nomansland:windswept_gravelly_hills/change_spawns',
        'nomansland:windswept_gravelly_hills/remove_features',
        'nomansland:windswept_hills/add_spawns',
        'nomansland:windswept_hills/change_color',
        'nomansland:windswept_hills/change_music',
        'nomansland:windswept_hills/change_spawns',
        'nomansland:windswept_hills/remove_features',
        'nomansland:windswept_savanna/add_spawns',
        'nomansland:windswept_savanna/change_color',
        'nomansland:windswept_savanna/change_spawns',
        'nomansland:windswept_savanna/remove_features',
        'nomansland:windswept_savanna/remove_spawns',
        'nomansland:wooded_badlands/add_spawns',
        'nomansland:wooded_badlands/change_color',
        'nomansland:wooded_badlands/remove_spawns',
        'oreganized:add_datura',
        'oreganized:add_sparse_datura',
        'oreganized:overworld_ores',
        'oreganized:savannah_ores',
        'rusticdelight:add_wild_bell_peppers',
        'rusticdelight:add_wild_coffee',
        'rusticdelight:add_wild_cotton',
        'snowundertrees:snow_under_trees',
        'supplementaries:basalt_ash',
        'supplementaries:cave_urns',
        'supplementaries:ocean_barnacles',
        'supplementaries:shore_barnacles',
        'supplementaries:wild_flax',
        'upgrade_aquatic:add_carver/underwater_canyon',
        'upgrade_aquatic:add_feature/ammonite_ore',
        'upgrade_aquatic:add_feature/beachgrass',
        'upgrade_aquatic:add_feature/driftwood_beach',
        'upgrade_aquatic:add_feature/driftwood_extra',
        'upgrade_aquatic:add_feature/driftwood_river',
        'upgrade_aquatic:add_feature/driftwood_swamp',
        'upgrade_aquatic:add_feature/driftwood',
        'upgrade_aquatic:add_feature/flowering_rush',
        'upgrade_aquatic:add_feature/pickerelweed_extra',
        'upgrade_aquatic:add_feature/pickerelweed',
        'upgrade_aquatic:add_feature/prismarine_coral',
        'upgrade_aquatic:add_feature/river_tree',
        'upgrade_aquatic:add_feature/searocket',
        'upgrade_aquatic:add_spawn/lionfish',
        'upgrade_aquatic:add_spawn/nautilus',
        'upgrade_aquatic:add_spawn/perch',
        'upgrade_aquatic:add_spawn/pike',
        'upgrade_aquatic:add_spawn/squid',
        'upgrade_aquatic:add_spawn/thrasher',
        'zeta:biome_modifier',
    ]

    const blacklist = new Set([
        'almostunified',
        'balm',
        'fabric_biome_api_v1',
        'zeta',
        'snowundertrees'
    ])
    const loaded = new Set()
    biomeModifiersToRemove.forEach(modifier => {
        const [mod, id] = modifier.split(':')
        if (!loaded.has(mod) && Platform.isLoaded(mod)) {
            loaded.add(mod)
        }
        if (loaded.has(mod) && !blacklist.has(mod)) {
            removeBiomeModifier(e, modifier)
        }
    })

    // removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite',
        256, -2, 2, -8, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:coarse_dirt', 'minecraft:andesite'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:coarse_dirt', 'minecraft:andesite']
    ), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite',
        256, -2, 2, -16, 0,
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'minecraft:rooted_dirt', 'minecraft:granite'],
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'minecraft:rooted_dirt', 'minecraft:granite']
    ), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone',
        256, -2, 2, -8, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone'],
        ['minecraft:grass_block', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:gravel', 'minecraft:dirt']
    ), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta',
        96, -2, 2, -6, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'minecraft:terracotta'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'minecraft:terracotta']
    ), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)
    /*

    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
        // hoping to get a different way to get diorite aside from underground idk
        // 'minecraft:ore_diorite_lower',
        'minecraft:ore_diorite_upper',
        'minecraft:ore_dirt',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)

    registerFeature(e, PLACED, 'minecraft:ore_gravel', {
        feature: 'minecraft:ore_gravel',
        placement: [
            { type: 'minecraft:count', count: 2 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 60 },
                    min_inclusive: { absolute: 0 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })


    // ⚠️⚠️⚠️⚠️⚠️ Vanilla feature overrides ⚠️⚠️⚠️⚠️⚠️
    // remove maple from NML & replace pine with fir
    registerFeature(e, CONFIGURED, 'minecraft:trees_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.33333334, feature: 'minecraft:pine_checked' },
                { chance: 0.1, feature: 'natures_spirit:fir_checked' }
            ]
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

    // redwood trees in mega taigas
    registerFeature(e, CONFIGURED, 'minecraft:trees_old_growth_pine_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.025, feature: 'minecraft:mega_spruce_checked' },
                { chance: 0.4, feature: 'minecraft:mega_pine_checked' },
                { chance: 0.05, feature: 'minecraft:pine_checked' },
                { chance: 0.1, feature: 'natures_spirit:large_redwood_checked' },
                { chance: 0.1, feature: 'natures_spirit:redwood_checked' },
            ]
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:trees_old_growth_spruce_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.5, feature: 'minecraft:mega_spruce_checked' },
                { chance: 0.1, feature: 'minecraft:pine_checked' },
                { chance: 0.2, feature: 'natures_spirit:large_redwood_checked' },
                { chance: 0.05, feature: 'natures_spirit:redwood_checked' },
            ]
        }
    })

    // ⚠️ REVERTING NML CHANGES TO VANILLA FEATURES ⚠️
    const thisFunctionExistsSoYouCanCollapseIt = () => {
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
    }
    thisFunctionExistsSoYouCanCollapseIt()
    */
}


/** @param {$KubeDataGenerator} e  */
function structures_Core(e) {
    // https://teamabnormals.wiki.gg/wiki/Structure_Repaletters
    // Swapping all blocks with Blueprint
    const repaletterJson = {
        structures: '#kubejs:all_structures',
        repaletter: [],
    }

    global.BLOCK_SWAPPER.forEach((replacesWith, replacesBlock) => {
        if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
            console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock}`)
            return
        }
        repaletterJson.repaletter.push({
            type: 'blueprint:simple',
            replaces_block: replacesBlock,
            replaces_with: replacesWith
        })
    })

    e.json('kubejs:blueprint/structure_repaletters/block_swapper', repaletterJson)


    global.STRUCTURE_BLOCK_SWAPPER.forEach((swapMap, structure) => {
        const json = {
            priority: 1,  // Lower priority value = loads later
            structures: structure,
            repaletter: [],
        }
        swapMap.forEach((replacesWith, replacesBlock) => {
            if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
                console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock} for structure ${structure}`)
                return
            }
            json.repaletter.push({
                type: 'blueprint:simple',
                replaces_block: replacesBlock,
                replaces_with: replacesWith
            })
        })

        e.json(`kubejs:blueprint/structure_repaletters/${nameProcess(structure)}`, json)
    })

    // Replacing minecraft:chest with oak chest by default
    e.json('kubejs:blueprint/structure_repaletters/default_oak_chest', {
        priority: 2,  // Higher priority value = loads earlier
        structures: '#kubejs:minecraft/has_oak_chest',
        repaletter: [
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:chest',
                replaces_with: 'woodworks:oak_chest'
            },
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:trapped_chest',
                replaces_with: 'woodworks:trapped_oak_chest'
            },
        ],
    })
}
