/** @param {$RecipesKubeEvent} e  */
function recipes_BountifulFares(e) {
    // coconut
    e.replaceInput({}, 'bountifulfares:coconut', 'natures_spirit:coconut')
    e.remove({ id: 'bountifulfares:coconut_half_from_coconut' })
    e.recipes.farmersdelight.cutting('natures_spirit:coconut', '#c:tools/knife', '2x bountifulfares:coconut_half')

    // recipes should use flour!
    e.replaceInput({ id: 'farmersdelight:wheat_dough_from_egg' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'farmersdelight:pie_crust' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'neapolitan:adzuki_bun' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'nomansland:food/pear_cobbler' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'minersdelight:nutritional_bar' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'nomansdelight:crafting/pesto_pizza' }, 'minecraft:wheat', 'bountifulfares:flour')
    e.replaceInput({ id: 'nomansdelight:crafting/nut_bun' }, 'minecraft:wheat', 'bountifulfares:flour')

    e.replaceInput({ output: /.*(cake|gateau|tart|pie|scones|cookie)/ }, 'minecraft:wheat', 'bountifulfares:flour')

    // removing cringe milling recipes
    e.remove({ id: 'bountifulfares:coconut_coir_from_coconut_milling' })  // for natures spirit coconut recipe
    // these should be relegated to Create's milling
    e.remove({ id: 'minecraft:amethyst_shard_from_amethyst_block_milling' })
    e.remove({ id: 'bountifulfares:amethyst_shard_from_amethyst_milling' })
    e.remove({ id: /minecraft:.*_ore_milling/, type: 'bountifulfares:milling' })

    // halve all outputs
    e.forEachRecipe({ type: 'bountifulfares:milling' }, recipe => {
        const json = global.json2json(recipe.originalJson)
        json.result_count = Math.ceil(json.result_count / 2)  // round up
        e.custom(json).id(recipe.getId())
    })

    e.custom({
        type: 'bountifulfares:milling',
        ingredient: { item: 'natures_spirit:coconut' },
        result: { id: 'bountifulfares:coconut_coir' },
        result_count: 2
    })
}