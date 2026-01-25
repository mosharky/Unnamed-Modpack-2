/** @param {$RecipesKubeEvent} e */
function recipes_Atmospheric(e) {
    e.shapeless('2x atmospheric:dolerite', ['natures_spirit:travertine', 'minecraft:cobblestone']).id('atmospheric:dolerite')

    e.replaceInput({}, 'atmospheric:orange', 'bountifulfares:orange')
    e.replaceInput({}, 'atmospheric:blood_orange', 'bountifulfares:orange')
}