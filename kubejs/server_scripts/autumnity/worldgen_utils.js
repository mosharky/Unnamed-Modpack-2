// priority: 1

/**
 * - Requires Autumnity (source: https://github.dev/team-abnormals/autumnity/tree/1.20.x/src/generated/resources/data/autumnity)
 * - Get a spotted placed feature JSON object
 * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} event - generateData event
 * @param {String} featureId - ID of the configured feature to be placed
 * @returns {String} Placed feature ID
 */
function spottedPlacedFeature(event, featureId, sapling) {
    return registerFeature(event, PLACED, `kubejs:spotted_${featureId.split(':')[1]}_placed`, {
        feature: featureId,
        placement: [
            {
                type: 'blueprint:better_noise_based_count',
                noise: 'autumnity:spotted_maples',
                noise_offset: -0.4000000059604645,
                noise_to_count_ratio: 1
            },
            {
                type: 'minecraft:in_square'
            },
            {
                type: 'minecraft:surface_water_depth_filter',
                max_water_depth: 0
            },
            {
                type: 'minecraft:heightmap',
                heightmap: 'OCEAN_FLOOR'
            },
            {
                type: 'minecraft:biome'
            },
            {
                type: 'minecraft:block_predicate_filter',
                predicate: {
                    type: 'minecraft:would_survive',
                    state: {
                        Name: sapling,
                        Properties: {
                            stage: '0'
                        }
                    }
                }
            },
        ]
    })
}