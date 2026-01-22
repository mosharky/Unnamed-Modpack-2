/** @param {$KubeDataGenerator} e  */
function worldgen_Autumnity(e) {

    // Disable all Autumnity biomes
    e.json('autumnity:blueprint/modded_biome_slices/autumn', disableBiomeSliceJson)

    // Remove Autumnity trees from vanilla worldgen
    removeBiomeModifier(e, 'autumnity:add_feature/maple_tree')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/orange')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/red')
    removeBiomeModifier(e, 'autumnity:add_feature/spotted_maple_tree/yellow')

    addFeatures(e, 
        copyPasteFeature(e, 'autumnity', PLACED, 'autumnity:patch_foul_berry_bush'),
        '#kubejs:has_feature/autumnity_foul_berry_bush',
        VEGETAL_DECORATION,
    )

    addFeatures(e,
        copyPasteFeature(e, 'autumnity', PLACED, 'autumnity:patch_pumpkin_pumpkin_fields'),
        '#kubejs:has_feature/autumnity_pumpkins',
        VEGETAL_DECORATION,
    )

    addFeatures(e, 
        configuredFoliagePatch(e, 'autumnity:autumn_crocus', 96, 7, 3, 32),
        '#kubejs:has_feature/autumnity_autumn_crocus',
        VEGETAL_DECORATION
    )
}
