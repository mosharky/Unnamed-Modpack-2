/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function worldgen_CavernsAndChasms(e) {
    // Replace silver ore with galopsphere's silver ore
    const ore_silver = getFeatureJson('caverns_and_chasms', CONFIGURED, 'caverns_and_chasms:ore_silver')
    ore_silver.config.targets.forEach(target => {
        target.state.Name = target.state.Name.replace('caverns_and_chasms', 'galosphere')
    })
    registerFeature(e, CONFIGURED, 'caverns_and_chasms:ore_silver', ore_silver)

    const ore_silver_buried = getFeatureJson('caverns_and_chasms', CONFIGURED, 'caverns_and_chasms:ore_silver_buried')
    ore_silver_buried.config.targets.forEach(target => {
        target.state.Name = target.state.Name.replace('caverns_and_chasms', 'galosphere')
    })
    registerFeature(e, CONFIGURED, 'caverns_and_chasms:ore_silver_buried', ore_silver_buried)


    // Making rocky dirt generate lower
    registerFeature(e, PLACED, 'caverns_and_chasms:ore_rocky_dirt', {
        feature: 'caverns_and_chasms:ore_rocky_dirt',
        placement: [
            { type: 'minecraft:count', count: 7 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 56 },
                    min_inclusive: { absolute: 0 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })
}