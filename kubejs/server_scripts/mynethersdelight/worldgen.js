/** @param {$KubeDataGenerator} e  */
function worldgen_MyNethersDelight(e) {
    removeBiomeModifier(e, 'mynethersdelight:patch_powdery_cane')
    addFeatures(e, 'mynethersdelight:patch_powdery_cane', '#kubejs:has_feature/patch_powdery_cane', VEGETAL_DECORATION)
}