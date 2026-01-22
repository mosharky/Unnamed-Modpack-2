/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function worldgen_FarmersDelight(e) {
    // Bountiful Fares overlap
    removeBiomeModifier(e, 'farmersdelight:wild_beetroots')
    removeBiomeModifier(e, 'farmersdelight:wild_carrots')
    removeBiomeModifier(e, 'farmersdelight:wild_potatoes')
}