/** @param {$RecipesKubeEvent} e */
function recipes_FarmersDelight(e) {
    e.replaceInput({}, 'farmersdelight:wheat_dough', '#c:foods/dough')
    e.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope')
    e.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope')

    e.remove({ id: 'farmersdelight:bread_from_smelting' })
    e.remove({ id: 'farmersdelight:bread_from_smoking' })
    e.remove({ id: 'farmersdelight:wheat_dough_from_water' })

    // dough / bread instead of wheat
    e.replaceInput({ id: 'neapolitan:banana_bread' }, 'minecraft:wheat', '#c:foods/dough')
    e.replaceInput({ id: 'abnormals_delight:pumpkin_bread' }, 'minecraft:wheat', '#c:foods/dough')

    e.stonecutting('farmersdelight:rope', 'supplementaries:rope')

    if (Platform.isLoaded('immersive_weathering')) {
        e.replaceInput({}, 'farmersdelight:tree_bark', '#immersive_weathering:bark')

        // Replace tree bark for Immersive Weathering barks
        for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
            for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
                if (woodTypeObj.minecraft.log != undefined && woodTypeObj.immersive_weathering.bark != undefined) {
                    e.recipes.farmersdelight.cutting(
                        woodTypeObj.minecraft.log,
                        { type: 'farmersdelight:tool_action', action: 'axe_strip' },
                        [woodTypeObj.minecraft.stripped_log, woodTypeObj.immersive_weathering.bark],
                        'minecraft:item.axe.strip'
                    )
                }

                if (woodTypeObj.minecraft.wood != undefined && woodTypeObj.immersive_weathering.bark != undefined) {
                    e.recipes.farmersdelight.cutting(
                        woodTypeObj.minecraft.wood,
                        { type: 'farmersdelight:tool_action', action: 'axe_strip' },
                        [woodTypeObj.minecraft.stripped_wood, woodTypeObj.immersive_weathering.bark],
                        'minecraft:item.axe.strip'
                    )
                }
            }
        }
    }
}