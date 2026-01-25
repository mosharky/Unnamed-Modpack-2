/** @param {$RecipesKubeEvent} e  */
function recipes_BountifulFares(e) {
    e.replaceInput({}, 'bountifulfares:coconut', 'natures_spirit:coconut')
    e.remove({id: 'bountifulfares:coconut_half_from_coconut'})
    e.recipes.farmersdelight.cutting('natures_spirit:coconut', '#c:tools/knife', '2x bountifulfares:coconut_half')

    e.custom({
        type: 'bountifulfares:milling',
        ingredient: { item: 'natures_spirit:coconut' },
        result: { id: 'bountifulfares:coconut_coir' },
        result_count: 2
    }).id('bountifulfares:coconut_coir_from_coconut_milling')
}