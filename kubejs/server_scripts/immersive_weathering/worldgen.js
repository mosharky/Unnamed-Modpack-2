/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function worldgen_ImmersiveWeathering(e) {
    removeBiomeModifier(e, 'immersive_weathering:has_loam')
    removeBiomeModifier(e, 'immersive_weathering:has_dune_grass')
    removeBiomeModifier(e, 'immersive_weathering:has_lakebed')
    removeBiomeModifier(e, 'immersive_weathering:has_earthen_clay')

    // addFeatures(e, registerCliff(e, 'immersive_weathering:permafrost'), '#kubejs:has_feature/permafrost_cliff', RAW_GENERATION)

    registerFeature(e, CONFIGURED, 'immersive_weathering:permafrost', {
        type: 'minecraft:ore',
        config: {
            size: 64,
            discard_chance_on_air_exposure: 0,
            targets: [
                {
                    target: { predicate_type: 'minecraft:block_match', block: 'minecraft:stone' },
                    state: { Name: 'immersive_weathering:permafrost' }
                },
                {
                    target: { predicate_type: 'minecraft:block_match', block: 'minecraft:dirt' },
                    state: { Name: 'immersive_weathering:permafrost' }
                },
                {
                    target: { predicate_type: 'minecraft:block_match', block: 'minecraft:grass_block' },
                    state: { Name: 'immersive_weathering:grassy_permafrost' }
                }
            ]
        }
    })

    registerFeature(e, PLACED, 'immersive_weathering:permafrost', {
        feature: 'immersive_weathering:permafrost',
        placement: [
            { type: 'minecraft:count', count: 256 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })

    registerFeature(e, CONFIGURED, 'immersive_weathering:sandy_dirt', {
        type: 'minecraft:ore',
        config: {
            size: 64,
            discard_chance_on_air_exposure: 0,
            targets: [
                {
                    target: { predicate_type: 'minecraft:block_match', block: 'minecraft:grass_block' },
                    state: { Name: 'immersive_weathering:grassy_sandy_dirt' }
                },
                {
                    target: { predicate_type: 'minecraft:block_match', block: 'minecraft:dirt' },
                    state: { Name: 'immersive_weathering:sandy_dirt' }
                }
            ]
        }
    })

    registerFeature(e, PLACED, 'immersive_weathering:sandy_dirt', {
        feature: 'immersive_weathering:sandy_dirt',
        placement: [
            { type: 'minecraft:count', count: 256 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
}