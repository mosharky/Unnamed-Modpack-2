/** @param {$RecipesKubeEvent} e */
function recipes_Create(e) {
    e.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceInput({}, 'create:wheat_flour', 'bountifulfares:flour')
    e.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceOutput({}, 'create:wheat_flour', 'bountifulfares:flour')

    e.recipes.create.milling([
        'bountifulfares:flour',
        CreateItem.of('bountifulfares:flour', 0.75),
        CreateItem.of('minecraft:wheat_seeds', 0.25)
    ], 'minecraft:wheat').id('create:milling/wheat')

    e.recipes.create.mixing('farmersdelight:pie_crust', [
        '3x farmersdelight:wheat_dough',
        Fluid.of('minecraft:milk', 250)
    ]).id('farmersdelight:integration/create/mixing/pie_crust_from_mixing')
}