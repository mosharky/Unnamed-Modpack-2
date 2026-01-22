function worldgen_ScGuns(e) {
    removeBiomeModifier(e, 'scguns:sulfur_vent')
    removeBiomeModifier(e, 'scguns:sulfur_ore')
    removeBiomeModifier(e, 'scguns:nether_sulfur_ore')
    removeBiomeModifier(e, 'scguns:geothermal_vent')
    addFeatures(e, 'scguns:patch_geothermal_vent', '#minecraft:is_deep_ocean', VEGETAL_DECORATION)

    registerFeature(e, PLACED, 'scguns:phosphorite_placed', {
        feature: 'scguns:phosphorite',
        placement: [
            { type: 'minecraft:count', count: 1 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:trapezoid',
                    max_inclusive: { absolute: 56 },
                    min_inclusive: { absolute: -64 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })

    registerFeature(e, PLACED, 'scguns:rich_phosphorite_placed', {
        feature: 'scguns:rich_phosphorite',
        placement: [
            { type: 'minecraft:count', count: 1 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:trapezoid',
                    max_inclusive: { absolute: 56 },
                    min_inclusive: { absolute: -64 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })
}