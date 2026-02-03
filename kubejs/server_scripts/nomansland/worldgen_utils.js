// priority: 1

// https://github.com/Alchemists-Of-Yore/No-Mans-Land/tree/1.21.1/src/main/resources/data/nomansland/worldgen/configured_feature/crag_rock.json
// https://github.com/Alchemists-Of-Yore/No-Mans-Land/tree/1.21.1/src/main/resources/data/nomansland/worldgen/placed_feature/crag_rock_craglands.json
/**
 * @param {$KubeDataGenerator} event 
 * @param {String} baseBlock 
 * @param {String} soilBlock 
 * @param {String} surfaceBlock 
 * @param {String} id 
 * @returns {String} placed feature ID
 */
function registerCommonCragRock(event, baseBlock, soilBlock, surfaceBlock) {
    const id = `kubejs:common_crag_rock/${baseBlock.replace(':', '_')}`
    registerFeature(event, CONFIGURED, id, {
        type: 'nomansland:crag_rock',
        config: {
            radius: { type: 'uniform', min_inclusive: 4, max_inclusive: 7 },
            height: { type: 'uniform', min_inclusive: 6, max_inclusive: 18 },
            radius_strength: 1,
            noise_strength: 5,
            base_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: baseBlock } },
            soil_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: soilBlock } },
            surface_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: surfaceBlock } }
        }
    })

    return registerFeature(event, PLACED, id, {
        feature: id,
        placement: [
            {
                type: 'nomansland:density_function_based_count',
                noise_function: 'nomansland:default',
                noise_scale: 1,
                noise_minimum: 0.1,
                noise_maximum: 0.9,
                count_minimum: 0,
                count_maximum: 1
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR_WG' },
            { type: 'minecraft:biome' }
        ]
    })
}

// https://github.com/Alchemists-Of-Yore/No-Mans-Land/tree/1.21.1/src/main/resources/data/nomansland/worldgen/placed_feature/crag_rock.json
/**
 * @param {$KubeDataGenerator} event 
 * @param {String} baseBlock 
 * @param {String} soilBlock 
 * @param {String} surfaceBlock 
 * @param {String} id 
 * @returns {String} placed feature ID
 */
function registerBasicCragRock(event, baseBlock, soilBlock, surfaceBlock) {
    const id = `kubejs:crag_rock/${baseBlock.replace(':', '_')}`
    registerFeature(event, CONFIGURED, id, {
        type: 'nomansland:crag_rock',
        config: {
            radius: { type: 'uniform', min_inclusive: 4, max_inclusive: 7 },
            height: { type: 'uniform', min_inclusive: 6, max_inclusive: 18 },
            radius_strength: 1,
            noise_strength: 5,
            base_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: baseBlock } },
            soil_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: soilBlock } },
            surface_block_provider: { type: 'minecraft:simple_state_provider', state: { Name: surfaceBlock } }
        }
    })

    return registerFeature(event, PLACED, id, {
        feature: 'nomansland:crag_rock',
        placement: [
            {
                type: 'nomansland:density_function_based_count',
                noise_function: 'nomansland:default',
                noise_scale: 1.85,
                noise_minimum: 0.75,
                noise_maximum: 1.0,
                count_minimum: 0,
                count_maximum: 3
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR_WG' },
            { type: 'minecraft:biome' }
        ]
    })
}