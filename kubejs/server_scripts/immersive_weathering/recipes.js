/** @param {$RecipesKubeEvent} e */
function recipes_ImmersiveWeathering(e) {
    e.shaped(Item.of('immersive_weathering:plate_iron', 64),
        ['AA', 'AA'],
        { A: 'minecraft:iron_block' }
    ).id('immersive_weathering:plate_iron')
}