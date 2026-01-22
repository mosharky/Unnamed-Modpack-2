/** @param {$KubeDataGenerator} e  */
function worldgen_Environmental(e) {
    // Disable Marsh and Pine biome
    e.json('environmental:blueprint/modded_biome_slices/marsh', disableBiomeSliceJson)
    // e.json('environmental:blueprint/modded_biome_slices/pine_barrens', disableBiomeSliceJson)

    // Disable biome modifiers
    removeBiomeModifier(e, 'environmental:add_feature/cattails')
    removeBiomeModifier(e, 'environmental:remove_feature/swamp_oak')  // not sure if this is even needed

    removeBiomeModifier(e, 'environmental:add_feature/flower_forest_vegetation')
    addFeatures(e, 'environmental:patch_delphiniums', '#kubejs:has_feature/environmental_delphiniums', VEGETAL_DECORATION)

    removeBiomeModifier(e, 'environmental:add_feature/swamp_vegetation')
    addFeatures(e, 'environmental:patch_duckweed_swamp', '#kubejs:has_feature/environmental_duckweed_swamp', VEGETAL_DECORATION)

    removeBiomeModifier(e, 'environmental:add_feature/bluebell')

    // Replace pine tree with windswept pine tree
    // registerFeature(e, CONFIGURED, 'environmental:pine_bees_0002', getFeatureJson('windswept', CONFIGURED, 'windswept:pine_bees'))

    addFeatures(e, [
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce'),
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce_thicket'),
    ], '#kubejs:has_feature/environmental_dwarf_spruce',
        VEGETAL_DECORATION
    )

    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:flower_red_lotus'), '#kubejs:has_feature/environmental_flower_red_lotus', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:flower_white_lotus'), '#kubejs:has_feature/environmental_flower_white_lotus', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:patch_giant_tall_grass_marsh'), '#kubejs:has_feature/environmental_giant_tall_grass_marsh', VEGETAL_DECORATION)
}